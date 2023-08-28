import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'react-loading-skeleton/dist/skeleton.css'
import ShowCategory from "@/components/ShowCategory/ShowCategory"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <ShowCategory />
    </div>
  )
}
