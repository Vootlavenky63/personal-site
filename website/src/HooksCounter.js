import React,{useState} from 'react'

export default function HooksCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button>count{count}</button>
            <button onClick={()=>setCount(0)}>Rest</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <button onClick={()=>setCount(count-1)}>Decrement</button>

        </div>
    )
}
