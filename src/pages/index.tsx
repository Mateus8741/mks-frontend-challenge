import Cards from '@/components/Cards'
import Sidebar from '@/components/Sidebar'
import { StoreDTO } from '@/dtos/store'
import { api } from '@/services/api'
import { HomeContainer } from '@/styles/Home'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<StoreDTO[]>([])

  async function fetchItens() {
    try {
      const response = await api.get('/products', {
        params: {
          page: 1,
          rows: 10,
          sortBy: 'id',
          orderBy: 'ASC',
        },
      })
      setData(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItens()
  }, [])

  return (
    <HomeContainer>
      <main>
        <Sidebar active={true} />
        {data.map((item) => (
          <Cards key={item.id} data={item} />
        ))}
      </main>
    </HomeContainer>
  )
}
