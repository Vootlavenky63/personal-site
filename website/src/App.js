import React,{useState} from 'react'

export default function App() {
  const [state, setstate] = useState("venky")
  
  return (
    <div>
      <h1>
{state}

      </h1>
      <button onClick={()=>setstate("venkatesh") }>click</button>
    </div>
  )
}
