import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme['blue-300']};

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 300;
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.125rem;
    font-weight: 700;
    margin-left: 0.9375rem;
    margin-right: 1.0625rem;
  }

  nav {
    display: flex;

    button {
      background-color: transparent;
      border: none;
    }
  }
`

export const Cart = styled.div`
  display: flex;
  background: ${(props) => props.theme.white};
  padding: 0.5rem;
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
`
