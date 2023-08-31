import '@/styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { createContext, useEffect, useState } from "react"
import Layout from "@/components/Layout/Layout"
export const MyContext = createContext()

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({})
  const value = {
    data, setData
  }
  useEffect(()=>{
    const mydata = require("@/data.json")
    setData(mydata)
  },[])
  return <MyContext.Provider value={value}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MyContext.Provider>
}
