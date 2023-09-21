// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios")
export default async function handler(req, res) {
  const response = await axios.get("https://api.thenextleg.io/v2/message/"+req.query.id,{
      headers:  {
        Authorization : 'Bearer 08f61cb9-0abb-4519-be5c-2cef3b431af4',
        'Content-Type': 'application/json'
      }
    })

  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
