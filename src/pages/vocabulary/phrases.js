import React, { useContext, useEffect, useState } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"
import { MyContext } from "../_app";

const Phrases = () => {
  const [phrase, setPhrase] = useState('')
  useEffect(()=>{
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `Give me few phrases of ${selectedWord}. Separate by new line `
      })
    })
    .then(res=>res.json())
    .then(res=>{
      const text = res.choices[0].message.content
      setPhrase(text)
    })
  },[])
  return (
      <VocabularyLayout pageTitle="Phrases of ">
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Phrases :</span></div>
          <div>
          {phrase ? (
            <div>
              <pre className=" overflow-auto w-full whitespace-pre-wrap break-words leading-snug">
                {phrase}
              </pre>
            </div>
          ) : (
            <div>Loading..</div>
          )}
          </div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default Phrases