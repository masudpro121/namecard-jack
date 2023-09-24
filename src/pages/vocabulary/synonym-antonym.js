import React from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"

const SynonymAntonym = () => {
  return (
    <VocabularyLayout>
      <div className="flex justify-center">
        <div className="w-full mx-5 sm:mx-0 sm:max-w-[600px] md:max-w-[800px] min-h-[200px] rounded-md bg-slate-800 mt-5 p-5 leading-10 text-gray-50">
          <div><span className="font-semibold ">Synonyms:</span> Show Synonym of Cat</div>
          <div><span className="font-semibold ">Antonym:</span> Show Antonym of Cat</div>
        </div>
      </div>
    </VocabularyLayout>
  )
}

export default SynonymAntonym