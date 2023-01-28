import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border: 0.3px solid #bfbfbfbf;
  border-radius: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 0.7rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.black};
    border: none;
    background: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`

export const Divisor = styled.div`
  width: 0.0313rem;
  height: 1.25rem;
  background-color: #bfbfbf;
  opacity: 0.4;
`

export const Qtd = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
  transform: translateY(-0.2rem);
`
