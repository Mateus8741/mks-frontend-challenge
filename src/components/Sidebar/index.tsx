import React from 'react'
import {
  Circle,
  Container,
  Content,
  HeaderSidebar,
  SidebarTitle,
  Total,
  TotalContent,
} from './styles'

import { X } from 'phosphor-react'
import SidebarItem from '../SidebarCard'
import { useTheme } from 'styled-components'
import { useCart } from '@/hooks/useCart'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

interface Props {
  active: boolean
}

const Sidebar = ({ active }: Props) => {
  const colors = useTheme()

  const { handleCloseSidebar } = useCart()

  const items = useSelector((state: RootState) => state.cart.items)
  const total = useSelector((state: RootState) => state.cart.total)

  function handleClose() {
    handleCloseSidebar()
  }

  return (
    <Container active={active}>
      <HeaderSidebar>
        <SidebarTitle>
          Carrinho
          <br />
          de compras
        </SidebarTitle>
        <Circle onClick={handleClose}>
          <X size={20} weight="fill" color={colors.white} />
        </Circle>
      </HeaderSidebar>
      <Content>
        {items &&
          items.map((item, index) => (
            <SidebarItem key={index} data={item as any} />
          ))}
      </Content>
      <TotalContent>
        <Total>Total:</Total>
        {total ? <Total>R${total}</Total> : <Total>R$0</Total>}
      </TotalContent>
    </Container>
  )
}

export default Sidebar
