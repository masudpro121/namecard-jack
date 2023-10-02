import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"

const SynonymAntonym = () => {
  const [synonym, setSynonym] = useState('')
  const [antonym, setAntonym] = useState('')
  useEffect(()=>{
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `Give me few Synonym and  Antonym of ${selectedWord}. Separate by comma and Give answer inside tags,  <synonym></synonym> <antonym></antonym>`
      })
    })
    .then(res=>res.json())
    .then(res=>{
      const text = res.choices[0].message.content
      const synoRegx = text.match(/<synonym>(.*)<\/synonym>/i)
      const antoRegx = text.match(/<antonym>(.*)<\/antonym>/i)
      const syno = synoRegx && synoRegx[1]
      const anto = antoRegx && antoRegx[1]
      setSynonym(syno)
      setAntonym(anto)
    })
  },[])
  return (
    <VocabularyLayout pageTitle="Synonym, Antonym of ">
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Synonyms:</span> {synonym?synonym:'loading..'}</div>
          <div><span className="font-semibold ">Antonym:</span> {antonym?antonym:'loading..'}</div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default SynonymAntonym