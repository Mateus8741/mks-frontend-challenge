import React, { useState } from 'react'
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

interface Props {
  active: boolean
}

const Sidebar = ({ active }: Props) => {
  const colors = useTheme()

  const [first, setfirst] = useState(false)

  function closeSidebar() {
    setfirst(!first)
  }

  return (
    <Container active={active}>
      <HeaderSidebar>
        <SidebarTitle>
          Carrinho
          <br />
          de compras
        </SidebarTitle>
        <Circle>
          <X
            size={20}
            weight="fill"
            onClick={closeSidebar}
            color={colors.white}
          />
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
