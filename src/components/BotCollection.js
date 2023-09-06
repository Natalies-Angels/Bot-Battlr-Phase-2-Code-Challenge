import React from "react";
import BotCard from "./BotCard";
function BotCollection({botsData, sendBotToArmy, handleDeleteBot}) {
  console.log("BotCollection component is rendered.");  return (
    <div className="ui four column grid">
      <div className="row">
      {botsData.map((bot) => (
        <div key={bot.id}>
          <BotCard bot={bot} sendBotToArmy={sendBotToArmy} handleDeleteBot={handleDeleteBot} />
         
        </div>
      ))}
        Collection of all bots
        
      </div>
    </div>
  );
}

export default BotCollection;
