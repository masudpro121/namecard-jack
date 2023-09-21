import Link from "next/link"
import React from 'react'

const Landing = () => {
  return (
    <div>
      <Link href="/ai-image">AI Image</Link> <br/>
      <Link href="/vocabulary">Vocabulary</Link>
    </div>
  )
}

export default Landing