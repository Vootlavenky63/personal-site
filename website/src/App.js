import React ,{useState}from 'react';
import Header from './Header';

import './App.css';
// import Hero from './Hero';
// import Family from './Family';
import Top from './Top';
import Bottom from './Bottom';
import Likes from './Likes';
import Prop from './Prop';



function App() {
  const[showjson,setshowjson]=useState([
    {
      "id": 1,
      "nAME": "Venkatesh",
      "fOLLWERS": 33,
      "fOLLOINGS": 33,
      "lIKES": 100
    },
    {
      "id": 2,
      "nAME": "Avinash",
      "fOLLWERS": 33,
      "fOLLOINGS": 56,
      "lIKES": 200
    },
    {
      "id": 3,
      "nAME": "Kiran",
      "fOLLWERS": 45,
      "fOLLOINGS": 65,
      "lIKES": 2000
    },
    {
      "id": 4,
      "nAME": "Laxmi",
      "fOLLWERS": 56,
      "fOLLOINGS": 5,
      "lIKES": 40000
    },
    {
      "id": 5,
      "nAME": "React",
      "fOLLWERS": 65,
      "fOLLOINGS": 87,
      "lIKES": 49
    }]
  )
  // fetch('https://api.sheety.co/c07e747e-888f-46f8-a428-290f66ed5c97')
  // .then(response => response.json())
  // .then(json =>setshowmenu(json))
  // // console.log("hiiiiiiiii")
  // console.log(showmenu)
  // console.log("<-------- show")
  console.log(showjson,"<------ json ")
  showjson.map

  return (
    <div className="App">
      {
        showjson.map(item=>(
         <div className="cardstyle"> <h1>{item.nAME}</h1><hr></hr>
          <h1>{item.fOLLOINGS}</h1><hr></hr>
          <h1>{item.lIKES}</h1>
          </div>
          
        ))
      }
      {/* <Prop name={showjson}/> */}
      
      {/* <button onClick={()=>setshowjson("avinash")}>click</button> */}
    {/* <Header/> */}
    {/* <Hero name="venkatesh" position="fullstack developer"/> */}
    {/* <Hero name="avinash" position="mean developer"/> */}
    {/* <Family name="KISHAN" age="50" occ="FARMER"/>
    <Family name="BHAGYAMMA" age="42" occ="FARMER"/>
    <Family name="SRINIVA" age="28" occ="SOFTWARE"/>
    <Family name="VENKATESH" age="25" occ="STUDENT"/>
    <Family name="GOUTHAMI" age="19" occ="STUDENT"/> */}
    {/* <Top/>
   
    <div className="row">
   <div className="details1"><Bottom name="venkatesh" age="25" occ="student"/></div>
    <div className= "details2"><Bottom name="avinash" age="21" occ="student"/></div>
    <div className ="details3"><Bottom name="kiran" age="25" occ="employee"/> </div>
   </div>
   <Likes Likes="3" comments="doing well"/> */}
 </div>
    
  );
}

export default App;

