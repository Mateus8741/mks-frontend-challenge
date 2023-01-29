import * as S from './styles'

import Logo from '@/assets/Logo.svg'
import { ShoppingCartSimple } from 'phosphor-react'
import Image from 'next/image'
import { useCart } from '@/hooks/useCart'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Header() {
  const { handleOpenSidebar } = useCart()

  const items = useSelector((state: RootState) => state.cart.items)

  const quantity = items.length

  function handleOpenCloseModal() {
    handleOpenSidebar()
  }

  return (
    <S.HeaderContainer>
      <Image src={Logo} alt="" />
      <nav>
        <S.Cart onClick={handleOpenCloseModal}>
          <div>
            <ShoppingCartSimple weight="fill" size={22} color="#000" />
            {quantity > 0 ? <span>{quantity}</span> : <span>0</span>}
          </div>
        </S.Cart>
      </nav>
    </S.HeaderContainer>
  )
}
