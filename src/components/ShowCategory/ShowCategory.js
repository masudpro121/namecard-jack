import React, { useContext, useEffect, useState } from 'react'
import RenderImage from "../RenderImage/RenderImage"
import Link from "next/link"
import { MyContext } from "@/pages/_app"

function ShowCategory() {
  const [isLoading, setIsLoading] = useState(false)
  const {data} = useContext(MyContext)
 
  const randomSrc = (d) => {
    return d[Math.floor(Math.random()*d.length)]
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center my-10">
      {
        Object.keys(data).map((category, key)=>{
          return (
              <Link key={category+key} href={"/"+category}>
                <RenderImage src={data[category][0]} />
              </Link>
          )
        })
      }
    </div>
  )
}

export default ShowCategory