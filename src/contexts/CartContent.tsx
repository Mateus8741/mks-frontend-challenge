import { CardProps } from '@/components/Cards'
import { addItem, removeItem } from '@/redux/counterCart'
import { openSidebar, closeSidebar } from '@/redux/sliceOpenSidebar'
import { createContext, ReactNode } from 'react'
import { useDispatch } from 'react-redux'

export type CartContextProps = {
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
  addItemToCart: (id: CardProps) => void
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

  function addItemToCart(item: CardProps) {
    dispatch(addItem(item))
  }

  function removeItemToCart(id: any) {
    dispatch(removeItem(id))
  }

  const value = {
    handleOpenSidebar,
    handleCloseSidebar,
    addItemToCart,
    removeItemToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
