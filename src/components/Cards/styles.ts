import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  overflow: hidden;
  gap: 0.8rem;

  img {
    margin: 1rem;
    align-self: center;
    width: 9.25rem;
    height: 8.625rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme.white};
    padding: 0.625rem 0;
    gap: 0.875rem;
    font-weight: bold;
    cursor: pointer;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 0.875rem;
  gap: 0.5rem;

  strong {
    padding: 0.25rem 0.4375rem;
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme.white};
    border-radius: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    padding: 0.25rem 0.4375rem;
    font-size: 0.9375rem;
  }

  h2 {
    align-self: center;
    /* max-width: 7.75rem; */
    word-break: break-all;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const CardFooter = styled.div`
  p {
    padding: 0 0.875rem;
    font-size: 0.625rem;
    font-weight: 300;
    color: ${(props) => props.theme['gray-400']};
  }
`
