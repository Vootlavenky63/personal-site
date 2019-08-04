import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function App() {
  
 




const [data, setData] = useState([])
useEffect(() => {
const fetchData = async () => {
const result = await axios.delete('https://jsonplaceholder.typicode.com/posts/1',{
  userId:"abhi"
})

setData(result.data)
}
fetchData()
}, [])
console.log(data,"response from server---->")
return (

<div>

<button />
</div>
)

}

