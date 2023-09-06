import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({clickedBots, removeBotFromArmy}) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">

          Your Bot Army
          {clickedBots.map((bot) =>
           (
             <BotCard key={bot.id} bot={bot} removeBotFromArmy={removeBotFromArmy}/>
           ))}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;