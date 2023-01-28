import Header from '@/components/Header'
import { ReactNode } from 'react'
import { LayoutContainer } from './styles'

interface Props {
  children: ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <LayoutContainer>
      <Header />
      <main>
        {children}
        <footer>MKS Sistemas © Todos os direitos reservados</footer>
      </main>
    </LayoutContainer>
  )
}
