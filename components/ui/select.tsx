'use client'

import * as React from "react"

interface SelectContextValue {
  value: string
  onValueChange: (value: string) => void
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined)

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  return (
    <SelectContext.Provider value={{ value, onValueChange }}>
      {children}
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ children, ...props }: React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  const context = React.useContext(SelectContext)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        {children}
        <span>▼</span>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-1 bg-popover border rounded-md shadow-md">
          {React.Children.map(
            React.Children.toArray(children).find((child: any) => child?.type === SelectContent)?.props?.children || [],
            (child: any) => {
              if (child?.type === SelectItem) {
                return React.cloneElement(child, {
                  onClick: () => {
                    context?.onValueChange(child.props.value)
                    setOpen(false)
                  }
                })
              }
              return child
            }
          )}
        </div>
      )}
    </div>
  )
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const context = React.useContext(SelectContext)
  return <span>{context?.value || placeholder}</span>
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectItem({ value, children, onClick }: { value: string; children: React.ReactNode; onClick?: () => void }) {
  const context = React.useContext(SelectContext)
  const isSelected = context?.value === value

  return (
    <div
      onClick={onClick}
      className={`px-3 py-2 cursor-pointer hover:bg-accent ${isSelected ? 'bg-accent' : ''}`}
    >
      {children}
    </div>
  )
}

