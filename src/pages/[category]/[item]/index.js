import RenderImage from "@/components/RenderImage/RenderImage";
import ShowGeneratedImages from "@/components/ShowGeneratedImage/ShowGeneratedImages";
import { MyContext } from "@/pages/_app";
import checkImage from "@/utils/checkImage";
import generateImage from "@/utils/generateImage";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

function Item() {
  const router = useRouter();
  const [input, setInput] = useState('')
  const { data } = useContext(MyContext);
  const { category, item } = router.query;
  const [generatedImages, setGeneratedImages] = useState([])
  const [progressImage, setProgressImage] = useState("")
  const [progress, setProgress] = useState('null')
  const handleGenerate = () => {
    generateImage({img:data[category][item], category, prompt: input})
    .then(msgId=>{
      setProgress(0)
      let  myInterval = setInterval(()=>{
        console.log('inteval called');
        checkImage(msgId)
        .then(checkRes=>{
          setProgress(checkRes.progress)
          if(checkRes.progress == 100){
            clearInterval(myInterval)
          }
          if(checkRes.images){
            setGeneratedImages(checkRes.images)
          }
          if(checkRes.progressImage){
            setProgressImage(checkRes.progressImage)
          }
        })
      },10000)
      
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  return (
    <div>
      <div className=" bg-slate-100 py-5 mt-5">
        <h2 className=" text-center mt-5 font-bold text-3xl text-gray-600">
          {category}
        </h2>
        <p className="text-center mt-3">
          Generate your own {category} with a good prompt
        </p>
      </div>

      <div className="sm:flex justify-center gap-5 px-2 sm:px-5 py-5 max-w-[1200px] m-auto">
        <div className=" flex-1">
          <RenderImage src={data[category]?.[item]} cls="w-[90%] m-auto" />
        </div>
        <div className=" flex-1 p-5 ">
          <div className="bg-slate-100 px-5 sm:px-10 py-5 sm:py-10 rounded-md">
            <label htmlFor="inputPrompt" className="font-semibold">
              Modify this image by your prompt
            </label>{" "}
            <br />
            <div className="flex gap-2 mt-3">
              <input
                className="w-full border-2 rounded-md px-2 py-1  outline-none border-gray-600 focus:border-gray-800 "
                id="inputPrompt"
                type="text"
                placeholder="Make your own image"
                onChange={e=>setInput(e.target.value)}
                value={input}
              />
              <button onClick={handleGenerate} className="bg-gray-700 hover:bg-gray-800 text-white rounded-md px-2 text-sm">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      {
        progress != "null" &&
        <div>
        <ShowGeneratedImages progress={progress} progressImage={progressImage} generatedImages={generatedImages} />
      </div>
      }
    </div>
  );
}

export default Item;
