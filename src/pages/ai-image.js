import Image from 'next/image'
import { Inter } from 'next/font/google'

import ShowCategory from "../components/ShowCategory/ShowCategory"

const inter = Inter({ subsets: ['latin'] })

export default function AIImage() {
  return (
      <div>
        <ShowCategory />
      </div>
  )
}
