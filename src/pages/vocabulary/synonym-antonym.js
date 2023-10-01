import React, { useContext, useEffect } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"
import { MyContext } from "../_app";

const SynonymAntonym = () => {
  useEffect(()=>{
    const selectedWord = localStorage.getItem("word");
    fetch("/api/completion", {
      method: 'POST',
      body: JSON.stringify({
        input: `Give me Synonym and  Antonym of ${selectedWord}. Give answer inside tags <synonym></synonym> <antonym></antonym>`
      })
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res, 'res');
    })
  },[])
  return (
    <VocabularyLayout>
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          {/* <div><span className="font-semibold ">Synonyms:</span> Show Synonym of {selectedWord}</div>
          <div><span className="font-semibold ">Antonym:</span> Show Antonym of {selectedWord}</div> */}
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default SynonymAntonym