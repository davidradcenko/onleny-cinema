import Layout from '@/components/layuot/Layout'
import { FC } from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import ReduxToast from './ReduxToast'
import { store } from '@/store/store'
import {Provider} from 'react-redux'
import HeadProvider from './HeadProvider/HeadProvider'

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
    <HeadProvider>
    <Provider store={store}>
   <QueryClientProvider  client={queryClient}>
    <ReduxToast/>
      <Layout>{children}</Layout>
   </QueryClientProvider> 
   </Provider>
   </HeadProvider>
  )
}

export default MainProvider