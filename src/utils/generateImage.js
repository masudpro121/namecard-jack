const generateImage = ({img, prompt, category}) => {
  return new Promise((resolve, reject)=>{
    fetch('/api/generate-image', {
      method: 'POST', 
      body: JSON.stringify({
        prompt: `${img}, ${category}, ${prompt}`
      })
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      if(res.success){
        resolve(res.messageId)
      }else{
        reject({statusCode:0, status:'Something Wrong'})
      }
    })
  })
}


export default generateImage