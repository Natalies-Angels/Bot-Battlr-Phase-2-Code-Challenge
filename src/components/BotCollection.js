import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ sendToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(bots => setBots(bots))
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <div key={bot.id}>
            <BotCard bot={bot} sendToArmy={sendToArmy} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
