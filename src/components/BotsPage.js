import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [clickedBots, setClickedBots] =useState([]);

  function SendToArmy(bot)
  {
    setClickedBots([...clickedBots,bot]);
  }

  const removeFromArmy = (botId) =>
  {
    const updatedArmy = clickedBots.filter((bot) => bot.id !== botId);
    setClickedBots(updatedArmy);
  }
  return (
    <div>
      <YourBotArmy  clickedBots={clickedBots} removeFromArmy={removeFromArmy}/>
      <BotCollection sendToArmy ={SendToArmy}/>
    </div>
  )
}

export default BotsPage;
