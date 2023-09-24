import React from 'react'
import VocabularyLayout from "../../components/Layouts/VocabularyLayout"

function VisualVocabulary() {
  const images = [
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
    "/assets/images/vocabulary/book.jpg",
  ]
  return (
    <VocabularyLayout>
      <div className="flex gap-5 flex-wrap justify-center my-5 ">
        {
          images.map((image, key)=>{
            return <img key={key} className="w-80 h-80 rounded-md" src={image} alt="" />
          })
        }
      </div>
    </VocabularyLayout>
  )
}

export default VisualVocabulary