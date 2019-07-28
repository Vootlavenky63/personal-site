import React,{useState} from 'react'
import Menu from './Menu';

export default function App() {
  const[showmenu,setshowmenu]=useState(false)
console.log(showmenu,"<-----show")

  return (
    <div>
<button onClick={()=>setshowmenu(!showmenu)}>tagglemenu</button>   
{showmenu ?(<Menu/>):null}


     
    </div>
  )
}
