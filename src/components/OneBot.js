import { NavLink } from "react-router-dom";
import "../style/OneBot.css";

function OneBot({picId,bots,addBot}) {
let oneBot = bots.filter((item) => {return item.id === picId})
  return (
    <div id="oneBot">
      <div>
        <img src={oneBot[0].avatar_url}></img>
      </div>
      <div id="oneBotDetails">
      <h5>{oneBot[0].name}</h5>
      <h7>{oneBot[0].catchphrase}</h7>
      <span id="oneBotabilities">
        <i id="health" className="material-icons">
          healing
        </i>
        <h5 id="ability">{oneBot[0].health}</h5>
        <i id="shield" className="material-icons">
          shield
        </i>
        <h5 id="ability">{oneBot[0].armor}</h5>
        <i id="bolt" className="material-icons">
          bolt
        </i>
        <h5 id="ability">{oneBot[0].damage}</h5>
      </span>
      <NavLink exact to = '/' id="button">Go Back</NavLink>
      <br />
      <button onClick = {
         ()=>{
          addBot(oneBot[0].id,oneBot[0].name,oneBot[0].avatar_url,oneBot[0].catchphrase,oneBot[0].health,oneBot[0].armor,oneBot[0].damage)
         }
      }id="button">Enlist</button>
    </div>
    </div>
  );
}

export default OneBot;
