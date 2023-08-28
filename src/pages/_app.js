import '@/styles/globals.css'
import { createContext, useEffect, useState } from "react"
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
    <Component {...pageProps} />
  </MyContext.Provider>
}
