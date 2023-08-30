// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios")
export default async function handler(req, res) {
  const response = await axios.post("https://api.thenextleg.io/v2/imagine",{
      "msg": req.body.prompt || "Generate a random image",
      "ref": "",
      "webhookOverride": ""
    }, {
      headers:  {
        Authorization : 'Bearer f1cd0d27-a07c-4b8b-b08c-a4f3a64e93f7',
        'Content-Type': 'application/json'
      }
    })

  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
