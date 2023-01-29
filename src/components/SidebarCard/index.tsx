import { useCart } from '@/hooks/useCart'
import { X } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { CardProps } from '../Cards'
import { Counter } from '../Counter'
import { Circle, Container, Price, ProductName } from './styles'

const SidebarItem = ({ data }: CardProps) => {
  const colors = useTheme()

  const { removeItemToCart } = useCart()

  function handleRemoveToCart(id: string) {
    removeItemToCart(id)
  }

  return (
    <>
      {data && (
        <>
          <Container>
            <div>
              <img
                src={data.photo}
                alt="Imagem do produdo"
                width={57}
                height={57}
              />
              <ProductName>{data.name}</ProductName>
            </div>

            <div>
              <Counter
                onDecrease={() => {}}
                quantity={1}
                onIncrease={() => {}}
              />
              <Price>R${data.price}</Price>
            </div>
          </Container>
          <Circle onClick={() => handleRemoveToCart(data.id)}>
            <X size={10} weight="fill" color={colors.white} />
          </Circle>
        </>
      )}
    </>
  )
}

export default SidebarItem
