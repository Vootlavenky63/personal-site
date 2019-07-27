import React ,{useState}from 'react';
import Header from './Header';

import './App.css';
// import Hero from './Hero';
// import Family from './Family';
import Top from './Top';
import Bottom from './Bottom';
import Likes from './Likes';



function App() {
  const[showmenu,setshowmenu]=useState(true)
  // fetch('https://api.sheety.co/c07e747e-888f-46f8-a428-290f66ed5c97')
  // .then(response => response.json())
  // .then(json => console.log(json,"<---- this is my json"))
  // console.log("hiiiiiiiii")
  console.log(showmenu)
  console.log("<-------- show")

  return (
    <div className="App">
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

