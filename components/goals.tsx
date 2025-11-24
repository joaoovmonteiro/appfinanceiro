'use client'

import { useState } from 'react'
import { Goal, Transaction } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Target, Plus } from 'lucide-react'

interface GoalsProps {
  goals: Goal[]
  onAdd: (goal: Omit<Goal, 'id' | 'createdAt' | 'progress'>) => void
  onUpdateProgress: (id: string, progress: number) => void
  transactions: Transaction[]
}

export default function Goals({ goals, onAdd, onUpdateProgress, transactions }: GoalsProps) {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [deadline, setDeadline] = useState('')

  const calculateCurrentAmount = (goal: Goal) => {
    // Calcular baseado em transações de receita desde a criação da meta
    const goalDate = new Date(goal.createdAt)
    const relevantTransactions = transactions.filter(
      t => t.type === 'income' && new Date(t.date) >= goalDate
    )
    return relevantTransactions.reduce((sum, t) => sum + t.amount, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !targetAmount || !deadline) {
      alert('Preencha todos os campos')
      return
    }

    onAdd({
      title,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      deadline,
    })

    setTitle('')
    setTargetAmount('')
    setDeadline('')
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Metas Financeiras</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Nova Meta
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Meta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título da Meta</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Viagem para Europa"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetAmount">Valor Alvo (R$)</Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    step="0.01"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Prazo</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit">Criar Meta</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {goals.map(goal => {
          const current = calculateCurrentAmount(goal)
          const progress = Math.min(100, (current / goal.targetAmount) * 100)
          
          return (
            <Card key={goal.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {goal.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progresso</span>
                    <span>{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Atual</p>
                    <p className="font-semibold">R$ {current.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Meta</p>
                    <p className="font-semibold">R$ {goal.targetAmount.toFixed(2)}</p>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  Prazo: {new Date(goal.deadline).toLocaleDateString('pt-BR')}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {goals.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Nenhuma meta criada ainda. Crie sua primeira meta financeira!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

