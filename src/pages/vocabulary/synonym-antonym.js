import React, { useContext } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"
import { MyContext } from "../_app";

const SynonymAntonym = () => {
  const { selectedWord } = useContext(MyContext);
  return (
    <VocabularyLayout>
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Synonyms:</span> Show Synonym of {selectedWord}</div>
          <div><span className="font-semibold ">Antonym:</span> Show Antonym of {selectedWord}</div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default SynonymAntonym