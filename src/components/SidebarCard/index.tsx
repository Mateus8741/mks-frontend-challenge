import { X } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { Counter } from '../Counter'
import { Circle, Container, Price, ProductName } from './styles'

interface Props {
  productName: string
  price: number
  productImage: string
}

const SidebarItem = ({ productName, price, productImage }: Props) => {
  const colors = useTheme()

  return (
    <>
      <Container>
        <div>
          <img
            src={productImage}
            alt="Imagem do produdo"
            width={46}
            height={57}
          />
          <ProductName>{productName}</ProductName>
        </div>

        <div>
          <Counter onDecrease={() => {}} quantity={1} onIncrease={() => {}} />
          <Price>R${price}</Price>
        </div>
      </Container>
      <Circle>
        <X size={10} weight="fill" onClick={() => {}} color={colors.white} />
      </Circle>
    </>
  )
}

export default SidebarItem
