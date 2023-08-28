import React, { useEffect, useState } from 'react'
import ShowImage from "../ShowImage/ShowImage"

function ShowCategory() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(()=>{
    const mydata = require("@/data.json")
    setData(mydata)
  },[])
  const randomSrc = (d) => {
    return d[Math.floor(Math.random()*d.length)]
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center my-10">
      {
        Object.keys(data).map((category, key)=>{
          return (
              <ShowImage  key={category+key} src={data[category][0]} />
          )
        })
      }
    </div>
  )
}

export default ShowCategory