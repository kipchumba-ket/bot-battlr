import React from "react";
import "../style/yourBotArmy.css"
import { NavLink } from 'react-router-dom'

function YourBotArmy({sortByHealth}) {
    return ( 
       <div div id = "yourBotArmy">
        <button onClick={()=>{
          sortByHealth()
        }}>sort by health</button>
       </div> 
     );
}

export default YourBotArmy;