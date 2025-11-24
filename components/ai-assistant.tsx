'use client'

import { useState } from 'react'
import { Transaction, Goal, AIAnalysis } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Bot, Sparkles, Loader2 } from 'lucide-react'

interface AIAssistantProps {
  transactions: Transaction[]
  goals: Goal[]
}

export default function AIAssistant({ transactions, goals }: AIAssistantProps) {
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null)
  const [loading, setLoading] = useState(false)

  const analyzeWithAI = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactions, goals }),
      })

      if (!response.ok) {
        throw new Error('Erro ao analisar com IA')
      }

      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error('Erro:', error)
      // Fallback para análise local se a API não estiver disponível
      setAnalysis(generateLocalAnalysis())
    } finally {
      setLoading(false)
    }
  }

  const generateLocalAnalysis = (): AIAnalysis => {
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
    const balance = income - expenses

    const insights = [
      `Você tem ${transactions.length} transações registradas.`,
      `Seu saldo atual é ${balance >= 0 ? 'positivo' : 'negativo'} de R$ ${Math.abs(balance).toFixed(2)}.`,
      `Você tem ${goals.length} meta(s) financeira(s) ativa(s).`,
    ]

    const recommendations = []
    if (expenses > income) {
      recommendations.push('Seus gastos estão superando suas receitas. Considere reduzir despesas desnecessárias.')
    }
    if (transactions.filter(t => t.type === 'expense').length > transactions.filter(t => t.type === 'income').length * 2) {
      recommendations.push('Você tem muitas despesas em relação às receitas. Tente aumentar suas fontes de renda.')
    }
    if (goals.length === 0) {
      recommendations.push('Crie metas financeiras para ter objetivos claros e motivadores.')
    }

    return {
      insights,
      recommendations: recommendations.length > 0 ? recommendations : ['Continue mantendo o controle de suas finanças!'],
      predictions: [
        `Com base no seu histórico, você pode economizar aproximadamente R$ ${(income * 0.2).toFixed(2)} por mês.`,
      ],
      summary: `Análise baseada em ${transactions.length} transações. ${balance >= 0 ? 'Parabéns! Você está no caminho certo.' : 'Atenção: é necessário ajustar seus gastos.'}`,
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Bot className="h-8 w-8" />
          Assistente IA
        </h1>
        <Button onClick={analyzeWithAI} disabled={loading || transactions.length === 0}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Analisar Finanças
            </>
          )}
        </Button>
      </div>

      {transactions.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Bot className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Adicione algumas transações para começar a receber análises inteligentes!
            </p>
          </CardContent>
        </Card>
      )}

      {analysis && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resumo Executivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{analysis.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recomendações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Previsões</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.predictions.map((pred, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500">🔮</span>
                    <span>{pred}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

