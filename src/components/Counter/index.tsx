import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, Divisor, Qtd } from './styles'

interface CounterProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Counter({ quantity, onIncrease, onDecrease }: CounterProps) {
  return (
    <div>
      <Qtd>Qtd:</Qtd>
      <CounterContainer>
        <button onClick={onDecrease} disabled={quantity <= 1}>
          <Minus weight="bold" size={10} />
        </button>

        <Divisor />

        <div>{quantity}</div>

        <Divisor />

        <button onClick={onIncrease}>
          <Plus weight="bold" size={10} />
        </button>
      </CounterContainer>
    </div>
  )
}
