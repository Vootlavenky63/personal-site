import React,{useState} from 'react'
import Green from './Green';
import Yellow from './Yellow';

export default function App() {
  const [bulbuglow, setbulbuglow] = useState(true)
  return (
    <div>
      {bulbuglow ? <Green/>:<Yellow/>}
      <button onClick={()=>(setbulbuglow(!bulbuglow))}>click</button>
      </div>
  )
}
