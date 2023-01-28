import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  padding: 1.1875rem 1.4375rem;
  border-radius: 10px;
  margin: 0 15px 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 1.3125rem;
  }
`

export const ProductName = styled.h3`
  max-width: 85px;
  word-break: break;
  font-size: 0.8125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
`

export const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`

export const Circle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.black};

  cursor: pointer;

  position: relative;
  bottom: 8rem;
  right: -25.2rem;
`
