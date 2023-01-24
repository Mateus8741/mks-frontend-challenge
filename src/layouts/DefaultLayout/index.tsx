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
      <main>{children}</main>
    </LayoutContainer>
  )
}
