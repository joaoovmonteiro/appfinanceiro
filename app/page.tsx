'use client'

import { useEffect, useState } from 'react'
import Dashboard from '@/components/dashboard'
import TransactionForm from '@/components/transaction-form'
import AIAssistant from '@/components/ai-assistant'
import Goals from '@/components/goals'
import Navigation from '@/components/navigation'
import { Transaction, Goal } from '@/types'

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [goals, setGoals] = useState<Goal[]>([])
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'goals' | 'ai'>('dashboard')

  useEffect(() => {
    // Carregar dados do localStorage
    const savedTransactions = localStorage.getItem('transactions')
    const savedGoals = localStorage.getItem('goals')
    
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions))
    }
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals))
    }
  }, [])

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }
    const updated = [newTransaction, ...transactions]
    setTransactions(updated)
    localStorage.setItem('transactions', JSON.stringify(updated))
  }

  const deleteTransaction = (id: string) => {
    const updated = transactions.filter(t => t.id !== id)
    setTransactions(updated)
    localStorage.setItem('transactions', JSON.stringify(updated))
  }

  const addGoal = (goal: Omit<Goal, 'id' | 'createdAt' | 'progress'>) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      progress: 0,
    }
    const updated = [...goals, newGoal]
    setGoals(updated)
    localStorage.setItem('goals', JSON.stringify(updated))
  }

  const updateGoalProgress = (id: string, progress: number) => {
    const updated = goals.map(g => 
      g.id === id ? { ...g, progress: Math.min(100, Math.max(0, progress)) } : g
    )
    setGoals(updated)
    localStorage.setItem('goals', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard transactions={transactions} goals={goals} />
        )}
        
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Transações</h1>
            <TransactionForm onAdd={addTransaction} />
            <div className="space-y-2">
              {transactions.map(transaction => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border"
                >
                  <div>
                    <p className="font-semibold">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.category} • {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-bold ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                      {transaction.type === 'income' ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="text-destructive hover:underline"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
              {transactions.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  Nenhuma transação registrada ainda.
                </p>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'goals' && (
          <Goals 
            goals={goals} 
            onAdd={addGoal}
            onUpdateProgress={updateGoalProgress}
            transactions={transactions}
          />
        )}
        
        {activeTab === 'ai' && (
          <AIAssistant transactions={transactions} goals={goals} />
        )}
      </main>
    </div>
  )
}

