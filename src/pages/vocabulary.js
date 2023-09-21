import vocabularyCategory from "@/assets/vocabulary/vocabulary-category"
import Image from "next/image"
import React, { useState } from 'react'

const Vocabulary = () => {
  const parentCategory = Object.keys(vocabularyCategory)
  const [word, setWord] = useState('')
  return (
    <div>
      {/* Search Vocabulary  */}
      <div  className="flex justify-center">
        <div className="mt-10 flex gap-2">
          <input className=" rounded-md py-2 sm:w-[400px]" onChange={(e)=>setWord(e.target.value)} type="text" placeholder="Type Word" />
          <button className="rounded-md text-sm px-5 font-semibold" onClick={()=>console.log(word)}>Search</button>
        </div>
      </div>

      {/* Categorized Learning Method  */}
      {
        parentCategory.map((category, i)=>{
          if(vocabularyCategory[category].length>0){
            return (
              <div key={category+i} className="mt-20 bg-gray-300 py-5 px-5  m-5 rounded-md">
                <div className="mb-5 text-2xl font-bold text-slate-900">{category}</div>
                <div className="flex flex-wrap gap-x-5 gap-y-10">
                {
                  vocabularyCategory[category].map((item, key)=>{
                    return (
                      <div className="sm:w-[48%] md:w-[30%] " key={"categoryItem"+key}>
                        <div>
                          <Image src={item.img} alt="" className="w-full rounded-tl-md rounded-tr-md" />
                          <div className="bg-slate-900 text-white py-3 px-4 font-semibold rounded-bl-md rounded-br-md">
                            {item.category}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
              </div>
            )
          }
           
        })
      }
    </div>
  )
}

export default Vocabulary