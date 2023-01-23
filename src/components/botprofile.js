import { React,useState }  from "react";
import { NavLink } from "react-router-dom";
import "../style/botProfile.css"
import OneBot from "./OneBot";

function BotProfile({id,image,name,phrase,health,armor,damage,addBot,handleId}) {
  let [state,setState] = useState('')
    return ( 
        <NavLink onClick={()=>{
          handleId(id)
        }} to = "/bot"  className = "hi"id = "card">
          <img src = {image}></img>
          <h5 id ="botName">{name}</h5>
          <h7 id = "botPhrase" >{phrase}</h7>
         <span id="abilities" ><i id="health" className="material-icons">healing</i><h5 id="ability">{health}</h5><i id="shield" className="material-icons">shield</i><h5 id="ability">{armor}</h5><i id="bolt" className="material-icons">bolt</i><h5 id="ability">{damage}</h5><button onClick = {(e)=>{
        e.stopPropagation()
        console.log("onClick");
        }}id="delete">X</button></span>
        </NavLink>
     );
} 

export default BotProfile;