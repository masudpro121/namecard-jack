// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios")
export default async function handler(req, res) {
  const {prompt} = JSON.parse(req.body)
 try{
  const response = await axios.post("https://api.thenextleg.io/v2/imagine",{
    "msg": prompt || "Generate a random image",
    "ref": "",
    "webhookOverride": ""
  }, {
    headers:  {
      Authorization : process.env.NEXTLEG_API,
      'Content-Type': 'application/json'
    }
  })
  console.log(response);
  res.send(response.data)
 }catch(err){
  console.log(err, 'err');
  res.send(err)

 }

  
  // res.status(200).json({ name: 'John Doe' })
}
