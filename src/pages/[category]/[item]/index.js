import RenderImage from "@/components/RenderImage/RenderImage"
import { MyContext } from "@/pages/_app"
import { useRouter } from "next/router"
import React, { useContext } from 'react'

function Item() {
  const router = useRouter()
  const {data} = useContext(MyContext)
  const {category, item} = router.query
  return (
    <div className="flex gap-5">
      <div className=" flex-1">
        <RenderImage src={data[category]?.[item]} cls="w-full" />
      </div>
      <div className=" flex-1 p-5">
        <label htmlFor="inputPrompt">
          Modify this image by your prompt
        </label> <br/>
        <div className="flex gap-2 mt-3">
          <input className="w-full border-2 rounded-md px-2 py-1  outline-none border-gray-600 focus:border-purple-600 " id="inputPrompt" type="text" placeholder="Make your own image" />
          <button className="bg-purple-600 text-white rounded-md px-2 text-sm">Generate</button>
        </div>
      </div>
    </div>
  )
}

export default Item