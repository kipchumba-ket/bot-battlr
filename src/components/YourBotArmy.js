import React from "react";
import "../style/yourBotArmy.css"
import { NavLink } from 'react-router-dom'

function YourBotArmy({sortByHealth,handleSort}) {
    return ( 
       <div div id = "yourBotArmy">
        <select onChange={
          (e)=>{
            handleSort(e.target.value);
          }
        }id ="select" >
          <option>Sort by</option>
          <option value='health'>Health</option>
          <option value='armor'>Armor</option>
          <option value='damage'>Damage</option>
        </select>
        </div>
     );
}

export default YourBotArmy;