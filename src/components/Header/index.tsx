import * as S from './styles'

import Logo from '@/assets/Logo.svg'
import { ShoppingCartSimple } from 'phosphor-react'
import Image from 'next/image'

interface Props {
  onClick?: () => void
}

export default function Header({ onClick }: Props) {
  return (
    <S.HeaderContainer>
      <Image src={Logo} alt="" />
      <nav>
        <button onClick={onClick}>
          <S.Cart>
            <ShoppingCartSimple weight="fill" size={22} color="#000" />
            <span>0</span>
            {/* {cartQuantity > 0 && <span>{cartQuantity}</span>} */}
          </S.Cart>
        </button>
      </nav>
    </S.HeaderContainer>
  )
}
