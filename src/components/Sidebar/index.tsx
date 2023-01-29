import React from 'react'
import {
  Circle,
  Container,
  Content,
  HeaderSidebar,
  SidebarTitle,
} from './styles'

import { X } from 'phosphor-react'
import SidebarItem from '../SidebarCard'
import { useTheme } from 'styled-components'
import { useCart } from '@/hooks/useCart'

interface Props {
  active: boolean
}

const Sidebar = ({ active }: Props) => {
  const colors = useTheme()

  const { handleCloseSidebar } = useCart()

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
        <SidebarItem
          productName="Home"
          price={399}
          productImage="https://github.com/Mateus8741.png"
        />
        <SidebarItem
          productName="Apple Watch Series 4 GPS"
          price={399}
          productImage="https://github.com/Mateus8741.png"
        />
      </Content>
    </Container>
  )
}

export default Sidebar
