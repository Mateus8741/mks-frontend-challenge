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

  nav {
    display: flex;

    button {
      background-color: transparent;
      border: none;
    }
  }
`

export const Cart = styled.div`
  width: fit-content;
  display: flex;
  background: ${(props) => props.theme.white};
  border-radius: 6px;
  align-items: center;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;

    span {
      color: ${(props) => props.theme['gray-300']};
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
`
