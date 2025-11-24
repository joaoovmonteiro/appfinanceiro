'use client'

import { Home, DollarSign, Target, Bot } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

interface NavigationProps {
  activeTab: 'dashboard' | 'transactions' | 'goals' | 'ai'
  setActiveTab: (tab: 'dashboard' | 'transactions' | 'goals' | 'ai') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: Home },
    { id: 'transactions' as const, label: 'Transações', icon: DollarSign },
    { id: 'goals' as const, label: 'Metas', icon: Target },
    { id: 'ai' as const, label: 'Assistente IA', icon: Bot },
  ]

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">💰 App Finanças</h1>
          
          <div className="flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              )
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

