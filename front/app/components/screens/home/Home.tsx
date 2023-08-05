import { FC } from 'react'
import { IHome } from './home.interface'
import Layout from '@/components/layuot/Layout'

 const Home:FC<IHome> =()=> {
  return (
    <>
    <Layout><h1>Hello</h1></Layout>
    </>
  )
}
export default Home