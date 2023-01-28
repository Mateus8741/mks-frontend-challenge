import { createContext, ReactNode } from 'react'

export type CartContextProps = {}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

interface ContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ContextProps) {
  const value = {}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
