import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({clickedBots, removeFromArmy})
 {
  
  const clickedBotCards = clickedBots.map((bot) => (
    <BotCard key={bot.id} bot={bot} removeFromArmy={removeFromArmy}/>
    ));
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
        {clickedBotCards}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;