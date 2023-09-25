import React, { useContext } from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"
import { MyContext } from "../_app";

const RootSuffixPrefix = () => {
  const { selectedWord } = useContext(MyContext);
  return (
    <VocabularyLayout>
      <div className="flex justify-center text-left">
        <div className=" mx-5 sm:mx-0 w-full sm:w-4/5  min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Roots:</span> Show Roots of {selectedWord}</div>
          <div><span className="font-semibold ">Suffix:</span> Show Prefix of {selectedWord}</div>
          <div><span className="font-semibold ">Prefix:</span> Show Suffix of {selectedWord}</div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default RootSuffixPrefix