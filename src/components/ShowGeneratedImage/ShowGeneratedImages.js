import React from "react";
import RenderImage from "../RenderImage/RenderImage";

function ShowGeneratedImages({ progress, progressImage, generatedImages }) {
  return (
    <div>
      {progress == 100 ? (
        <div>
          <div className="text-center mt-20 text-3xl font-bold text-gray-700">
            Our Generated Images
          </div>
          <div className="flex flex-wrap gap-5 m-auto justify-center my-5">
            {generatedImages.map((img, i) => {
              return (
                <div className="">
                  <RenderImage src={img} key={img + i} />
                </div>
              );
            })}
          </div>
        </div>
      ) : progress > 0 ? (
        <div>
          <div className="text-center mt-20 text-3xl font-bold text-gray-700">
            Progress {progress}%
          </div>
          <div className="m-auto flex flex-wrap justify-center my-10">
            <RenderImage src={progressImage} cls="h-[400px] w-[400px]" />
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mt-20 text-3xl font-bold text-gray-700">
            Progress {progress}%
          </div>
          <div className="m-auto flex flex-wrap justify-center my-10">
            <RenderImage cls="h-[400px] w-[400px]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowGeneratedImages;
