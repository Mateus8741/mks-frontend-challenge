import { ShoppingBagOpen } from 'phosphor-react'
import * as S from './styles'

interface Props {
  data: {
    name: string
    brand: string
    description: string
    price: number
    photo: string
  }
}

export default function Cards({ data }: Props) {
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
      <button>
        <ShoppingBagOpen size={22} color="#FFF" />
        Comprar
      </button>
    </S.CardsContainer>
  )
}
