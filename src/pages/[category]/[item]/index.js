import RenderImage from "@/components/RenderImage/RenderImage"
import { MyContext } from "@/pages/_app"
import { useRouter } from "next/router"
import React, { useContext } from 'react'

function Item() {
  const router = useRouter()
  const {data} = useContext(MyContext)
  const {category, item} = router.query
  return (
    <div>
      <div className=" bg-slate-100 py-5 mt-5">
        <h2 className=" text-center mt-5 font-bold text-3xl text-gray-600">{category}</h2>
        <p className="text-center mt-3">Generate your own {category} with a good prompt</p>
      </div>
      <div className="sm:flex justify-center gap-5 px-2 sm:px-5 py-5 max-w-[1200px] m-auto">
      <div className=" flex-1">
        <RenderImage src={data[category]?.[item]} cls="w-[90%] m-auto" />
      </div>
      <div className=" flex-1 p-5 ">
        <div className="bg-slate-100 px-5 sm:px-10 py-5 sm:py-10 rounded-md">
          <label htmlFor="inputPrompt" className="font-semibold">
            Modify this image by your prompt
          </label> <br/>
          <div className="flex gap-2 mt-3">
            <input className="w-full border-2 rounded-md px-2 py-1  outline-none border-gray-600 focus:border-gray-800 " id="inputPrompt" type="text" placeholder="Make your own image" />
            <button className="bg-gray-700 hover:bg-gray-800 text-white rounded-md px-2 text-sm">Generate</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Item