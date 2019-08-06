import React,{useState} from 'react'

export default function HooksCounter() {
     const initialValue=0
    const [count, setCount] = useState(initialValue)
    return (
        <div>
            <button>count{count}</button>
            <button onClick={()=>setCount(initialValue)}>Rest</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <button onClick={()=>setCount(count-1)}>Decrement</button>

        </div>
    )
}
