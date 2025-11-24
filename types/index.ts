export interface Transaction {
  id: string
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

export interface Goal {
  id: string
  title: string
  targetAmount: number
  currentAmount: number
  deadline: string
  createdAt: string
  progress: number
}

export interface AIAnalysis {
  insights: string[]
  recommendations: string[]
  predictions: string[]
  summary: string
}

