import { React,useState,useEffect } from 'react';
import "./App.css";
import BotCollection from "./components/BotCollection";
import BotProfile from './components/botprofile';
import YourBotArmy from "./components/YourBotArmy";
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom"
import OneBot from './components/OneBot';



function App() {

  let [bots ,setBots] = useState([])
  let [botsChosen ,setBotChosen] = useState(0)
  let[numbersArray,setArray] = useState ([])
  const [currentPage,setPage] = useState("/home")
  let [picId,setId]  = useState(0)
  let [isTrue,setTrue] = useState(true)
  let [newArray,setNewArray] = useState([])

useEffect(()=>{
  fetch("https://ketkip.vercel.app/bots")
  .then((res)=> res.json())
  .then((data) =>{
    setBots(data)
    console.log(data);
  })
},[])

function sortByHealth(){
 let data = bots.sort((a,b)=>{
    let categoryA = a.health
    let categoryB = b.health
  
    if(categoryA > categoryB ) {
      return -1;
  }
  if (categoryA < categoryB ) {
      return 1;
  }
  return 0;
  })
    setNewArray(data)
    setBots(data)
}

function handleId(value) {
  setId(value)
}

console.log(picId)
function addBot(id,name,image,phrase,health,armor,damage){
 let array = [...numbersArray]
  array.push(id)
  setArray(array)
  if(numbersArray.find(item => item === id)){
    console.log("match")
  }else{
    let botArmy = document.querySelector("#yourBotArmy")
    let newBot = document.createElement("div")
    newBot.id = "army-container"
    newBot.setAttribute("value", id)
    newBot.innerHTML = 
   `
     <img src = ${image} id= 'army-pic'></img>
     <h6 id="army-heading">${name}</h6>
     <h6 id="army-phrase">${phrase}</h6>
     <span id="army-abilities" ><h5 id="army-ability">health: ${health}</h5><h5 id="army-ability">Armor: ${armor}</h5><h5 id="army-ability">Damage: ${damage}</h5></span>
    `
    newBot.addEventListener('click',(e)=>{
      console.log(array)
      let value = parseInt(newBot.getAttribute('value'));
      let newValue = numbersArray.filter((item)=>{
        return item !== value
      })
      setArray(newValue)
      newBot.remove()
    })
    botArmy.appendChild(newBot)
  }
}

  return (
    <Router>
    <main>
      <YourBotArmy sortByHealth = {sortByHealth}/>
      <Switch>
       <Route exact path="/">
         <BotCollection handleId = {handleId} addBot = {addBot} bots = {bots}/>
       </Route>
       <Route path="/bot">
        <OneBot addBot = {addBot} bots = {bots} picId = {picId}/>
       </Route>
        </Switch>
    </main>
    </Router>
  );
}

export default App;
