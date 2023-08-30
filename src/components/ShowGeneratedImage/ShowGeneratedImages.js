import React from 'react'
import RenderImage from "../RenderImage/RenderImage"

function ShowGeneratedImages({progress, progressImage, generatedImages}) {
  return (
    <div>
      {
        progress == 100 ? 
        <div>
          <div>Progress Done</div>
          {
            generatedImages.map((img, i)=> {
              return (
                <div>
                  <RenderImage src={img} key={img+i} />
                </div>
              )
            })
          }
        </div>
        : progress > 0 ?
        <div> 
          <div>Inprogress with Image: {progress}</div>
          <div>
            <RenderImage src={progressImage} />
          </div>
        </div>
        :<div>
          <div>Inprogress {progress}</div>
          <div>
            <RenderImage />
          </div>
        </div>
      }
    </div>
  )
}

export default ShowGeneratedImages