import Image from 'next/image'
import { Inter } from 'next/font/google'

import ShowCategory from "@/components/ShowCategory/ShowCategory"
import Layout from "@/components/Layout/Layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <ShowCategory />
      </div>
  )
}
