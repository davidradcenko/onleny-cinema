import { FC } from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false
        }
    }
})

type Props = {
  children: React.ReactNode
}

const MainProvider:FC<Props> = ({children}) => {
  return (
   <QueryClientProvider  client={queryClient}>
      {children}
   </QueryClientProvider> 
  )
}

export default MainProvider