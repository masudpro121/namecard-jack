import SSE from "express-sse";
import { OpenAI } from "langchain/llms/openai";

const sse = new SSE();
export default async function handler(req, res) {
  if(!res.flush){
    res.flush = ()=>{}
  }
 
  if (req.method == "POST") {
    const { input, eventName } = JSON.parse(req.body);

    const chat = new OpenAI({
      model: 'gpt-3.5-turbo',
      OPENAI_API_KEY: process.env.OPENAI_API,
      streaming: true,
      callbacks: [
        {
          handleLLMNewToken(token) {
            sse.send(token, eventName);
          },
        },
      ],
    });
    chat.call(input).then(() => {
      sse.send(null, "end");
    });
    return res.status(200).json({ result: "Streaming complete" });
  } else if (req.method == "GET") {
    sse.init(req, res);
  }
}
