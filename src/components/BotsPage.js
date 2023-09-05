import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [clickedBots, setClickedBots] =useState([]);

  function handleSendToArmy(bot)
  {
    setClickedBots([...clickedBots,bot]);
  }
  return (
    <div>
      <YourBotArmy  clickedBots={clickedBots}/>
      <BotCollection sendToArmy ={handleSendToArmy}/>
    </div>
  )
}

export default BotsPage;
