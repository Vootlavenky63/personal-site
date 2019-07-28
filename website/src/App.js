import React,{useState} from 'react'

export default function App() {
  const[showmenu,setshowmenu]=useState(false)
console.log(showmenu,"<-----show")
  return (
    <div>
<button onClick={()=>setshowmenu(true)}>tagglemenu</button>      
     
    </div>
  )
}
