import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"
import { MyContext } from "../_app";

const RootSuffixPrefix = () => {
  const [root, setRoot] = useState('')
  const [suffix, setSuffix] = useState('')
  const [prefix, setPrefix] = useState('')
  useEffect(()=>{
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `Give me few Roots, Suffix, Prefixes of ${selectedWord}. Separate by comma and Give answer inside tags,  <Roots></Roots> <Suffix></Suffix> <Prefix></Prefix>`
      })
    })
    .then(res=>res.json())
    .then(res=>{
      const text = res.choices[0].message.content
      const rootsRegx = text.match(/<Roots>(.*)<\/Roots>/)
      const suffixRegx = text.match(/<Suffix>(.*)<\/Suffix>/)
      const prefixRegx = text.match(/<Prefix>(.*)<\/Prefix>/)
      const root = rootsRegx && rootsRegx[1]
      const suffix = suffixRegx && suffixRegx[1]
      const prefix = prefixRegx && prefixRegx[1]
      setRoot(root)
      setSuffix(suffix)
      setPrefix(prefix)
     
    })
  },[])
  return (
    <VocabularyLayout>
      <div className="flex justify-center text-left" pageTitle="Roots, Suffix, Prefix of ">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Roots:</span> {root?root:'loading..'}</div>
          <div><span className="font-semibold ">Suffix:</span> {suffix?suffix:'loading..'}</div>
          <div><span className="font-semibold ">Prefix:</span> {prefix?prefix:'loading..'}</div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default RootSuffixPrefix