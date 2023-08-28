import { useRouter } from "next/router";
import React, { useContext } from 'react'
import { MyContext } from "../_app";
import Link from "next/link";
import RenderImage from "@/components/RenderImage/RenderImage";

function CategoryPage() {
  const {data} = useContext(MyContext)
  const router = useRouter()
  const category = router.query.category
  return (
    <div className="flex flex-wrap gap-5 justify-center my-10">
      {
        data[category]?.map((item, key)=>{
          return (
              <Link key={item+key} href={"/"+category}>
                <RenderImage src={item} />
              </Link>
          )
        })
      }
    </div>
  )
}

export default CategoryPage