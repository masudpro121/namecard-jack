import React, { useContext, useEffect, useState } from "react";
import VocabularyLayout from "../../components/Layouts/VocabularyLayout";
import { MyContext } from "../_app";
import checkImage from "@/utils/checkImage";
import ShowGeneratedImages from "@/components/ShowGeneratedImage/ShowGeneratedImages";

function VisualVocabulary() {
  const [progress, setProgress] = useState("null");
  const [progressImage, setProgressImage] = useState("");
  const [generatedImages, setGeneratedImages] = useState("");


  const generateImage = (selectedWord) => {
    fetch("/api/generate-image", {
      method: "POST",
      body: JSON.stringify({ prompt: "Generate a image of: " + selectedWord  }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const msgId = res.messageId;
        setProgress(0);
        setTimeout(() => {
          console.log("inside timeout");
          let myInterval = setInterval(() => {
            console.log("inside interval");
            checkImage(msgId).then((checkRes) => {
              console.log(checkRes);
              setProgress(checkRes.progress);
              if (checkRes.progress == 100) {
                clearInterval(myInterval);
              }
              if (checkRes.images) {
                setGeneratedImages(checkRes.images);
              }
              if (checkRes.progressImage) {
                setProgressImage(checkRes.progressImage);
              }
            });
          }, 10000);
        }, 20000);
      });
  };
  
  useEffect(()=>{
   const selectedWord = localStorage.getItem('word')
   generateImage(selectedWord)
  },[])
  return (
    <VocabularyLayout>
      <div className="flex gap-5 flex-wrap justify-center my-5 px-5 ">
        {/* {
          images.map((image, key)=>{
            return <img key={key} className="w-80 h-80 rounded-md" src={image} alt="" />
          })
        } */}
        {progress != "null" && (
          <div>
            <ShowGeneratedImages
              progress={progress}
              progressImage={progressImage}
              generatedImages={generatedImages}
              headline={false}
              renderCls="-z-10 "
            />
          </div>
        )}
      </div>
    </VocabularyLayout>
  );
}

export default VisualVocabulary;
