import { addToCart, removeFromCart } from '@/redux/counterCart'
import { openSidebar, closeSidebar } from '@/redux/sliceOpenSidebar'
import { createContext, ReactNode } from 'react'
import { useDispatch } from 'react-redux'

export type CartContextProps = {
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
  addItemToCart: (id: string) => void
  removeItemToCart: (id: string) => void
}

interface ContextProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export function CartContextProvider({ children }: ContextProps) {
  const dispatch = useDispatch()
  function handleOpenSidebar() {
    dispatch(openSidebar())
  }

  function handleCloseSidebar() {
    dispatch(closeSidebar())
  }

  function addItemToCart(id: string) {
    dispatch(addToCart(id))
  }

  function removeItemToCart(id: string) {
    dispatch(removeFromCart(id))
  }

  const value = {
    handleOpenSidebar,
    handleCloseSidebar,
    addItemToCart,
    removeItemToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
