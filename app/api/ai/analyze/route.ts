import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { transactions, goals } = await request.json()

    // Se não houver chave da API, retornar análise básica
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      return NextResponse.json({
        insights: [
          `Você tem ${transactions.length} transações registradas.`,
          `Você tem ${goals.length} meta(s) financeira(s).`,
        ],
        recommendations: [
          'Configure a chave da OpenAI API para receber análises mais detalhadas.',
        ],
        predictions: [
          'Continue registrando suas transações para análises mais precisas.',
        ],
        summary: 'Análise básica baseada nos dados fornecidos.',
      })
    }

    const income = transactions
      .filter((t: any) => t.type === 'income')
      .reduce((sum: number, t: any) => sum + t.amount, 0)
    
    const expenses = transactions
      .filter((t: any) => t.type === 'expense')
      .reduce((sum: number, t: any) => sum + t.amount, 0)
    
    const balance = income - expenses

    const prompt = `
Analise as seguintes informações financeiras e forneça insights, recomendações e previsões:

Transações:
- Total de receitas: R$ ${income.toFixed(2)}
- Total de despesas: R$ ${expenses.toFixed(2)}
- Saldo: R$ ${balance.toFixed(2)}
- Número de transações: ${transactions.length}

Metas:
- Número de metas: ${goals.length}
${goals.map((g: any) => `- ${g.title}: R$ ${g.targetAmount.toFixed(2)}`).join('\n')}

Forneça uma análise em JSON com:
1. insights: array de 3-5 insights sobre a situação financeira
2. recommendations: array de 3-5 recomendações práticas e acionáveis
3. predictions: array de 2-3 previsões baseadas nos padrões identificados
4. summary: resumo executivo em 1-2 frases

Responda APENAS com o JSON, sem markdown ou texto adicional.
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente financeiro especializado em análise de finanças pessoais. Responda sempre em JSON válido.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const responseText = completion.choices[0]?.message?.content || '{}'
    let analysis

    try {
      analysis = JSON.parse(responseText)
    } catch {
      // Fallback se a resposta não for JSON válido
      analysis = {
        insights: ['Análise gerada com sucesso.'],
        recommendations: ['Continue monitorando suas finanças regularmente.'],
        predictions: ['Mantenha o controle de suas transações.'],
        summary: 'Análise financeira completa.',
      }
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Erro na análise com IA:', error)
    
    // Retornar análise básica em caso de erro
    return NextResponse.json({
      insights: [
        'Erro ao conectar com a IA. Análise básica fornecida.',
      ],
      recommendations: [
        'Verifique sua conexão com a internet e tente novamente.',
      ],
      predictions: [
        'Continue registrando suas transações.',
      ],
      summary: 'Análise básica devido a erro na conexão com IA.',
    })
  }
}

