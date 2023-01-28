import styled from 'styled-components'

export const LayoutContainer = styled.div`
  main {
    padding: 0 3rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5625rem 0;
    background-color: ${(props) => props.theme['white-300']};
    color: ${(props) => props.theme.black};
    font-weight: 400;
    font-size: 0.75rem;
    margin-top: 2rem;
  }
`
