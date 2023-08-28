import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton"

function RenderImage({src}) {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoaded = () =>{
    setIsLoading(false)
  }
  
  return (
    <div className="w-80">
     {
      isLoading && <Skeleton duration={0.7} className="h-80" />
     }
    <img className={isLoading?"hidden":"block" + " rounded-md "} src={src} onLoad={handleLoaded} />
    </div>
  )
}

export default RenderImage