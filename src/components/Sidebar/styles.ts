import styled from 'styled-components'

interface Props {
  active: boolean
}

export const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme['blue-300']};
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 30.375rem;
  right: ${(props) => (props.active ? '0' : '-100%')};
  animation: showSidebar 0.4s;
  z-index: 6;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const HeaderSidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  margin-top: 2.4375rem;
`

export const SidebarTitle = styled.h1`
  font-size: 1.6875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.black};
`

export const Content = styled.div`
  margin-top: 4.375rem;
  padding: 0 30px;
`
