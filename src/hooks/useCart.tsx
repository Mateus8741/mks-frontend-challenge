import { CartContext } from '@/contexts/CartContent'
import { useContext } from 'react'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
