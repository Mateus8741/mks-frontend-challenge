import { useCart } from '@/hooks/useCart'
import { ShoppingBagOpen } from 'phosphor-react'
import * as S from './styles'

export interface CardProps {
  data: {
    id: string
    name: string
    brand: string
    description: string
    price: number
    photo: string
  }
}

export default function Cards({ data }: CardProps) {
  const { addItemToCart } = useCart()

  function handleAddToCart(id: string) {
    addItemToCart(id)
  }

  return (
    <S.CardsContainer>
      <img src={data.photo} alt={data.name} />
      <S.Content>
        <h2>{data.name}</h2>
        <strong>R${data.price}</strong>
      </S.Content>
      <S.CardFooter>
        <p>{data.description}</p>
      </S.CardFooter>
      <button onClick={() => handleAddToCart(data.id)}>
        <ShoppingBagOpen size={22} color="#FFF" />
        Comprar
      </button>
    </S.CardsContainer>
  )
}
