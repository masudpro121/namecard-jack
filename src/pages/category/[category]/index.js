import { useRouter } from "next/router";
import React, { useContext } from 'react'
import Link from "next/link";
import RenderImage from "../../../components/RenderImage/RenderImage";
import { MyContext } from "../../_app";

function CategoryPage() {
  const {data} = useContext(MyContext)
  const router = useRouter()
  const category = router.query.category
  return (
    <div>
      <div className=" bg-slate-100 py-5 mt-5">
        <h2 className=" text-center mt-5 font-bold text-3xl text-gray-600">{category}</h2>
        <p className="text-center mt-3">Choose a {category} to modify and Generate new one with your prompt</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center my-10">
      {
        data[category]?.map((item, key)=>{
          return (
              <Link key={item+key} href={`/category/${category}/${key}`}>
                <RenderImage src={item} />
              </Link>
          )
        })
      }
    </div>
    </div>
  )
}

export default CategoryPage