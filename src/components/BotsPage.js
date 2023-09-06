import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botsData, setBotsData] = useState([]);
  const [clickedBots, setClickedBots] = useState([]);
  const [botsInArmy, setBotsInArmy] = useState([])
  
   useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then(response => response.json())
    .then(botsData => setBotsData(botsData))
    .catch((error) => console.error("Failed to fech Bot Data", error))
   },[]);
  
   function sendBotToArmy(bot)
   {
     if(!clickedBots.some((clickedBot) => (clickedBot.id) === bot.id)) //uses some() to check if the bot exists in the array
     {
        setClickedBots([...clickedBots, bot])//if bot does not exist in the array, it's added tothe clickedBots array
    
        if(!botsInArmy.includes(bot.id))
         {
          setBotsInArmy([...botsInArmy, bot.id])
         }
     } 
     else
     {
        window.alert(`${bot.name} is already enlisted in the army!`)
     }
   }

   function removeBotFromArmy(botId)
   {
    const updatedBotArmy = clickedBots.filter((bot) => botId !== bot.id);
    setClickedBots(updatedBotArmy);
   }

  return (
    <div>
      <YourBotArmy clickedBots={clickedBots} removeBotFromArmy={removeBotFromArmy}/>
      <BotCollection botsData={botsData} sendBotToArmy={sendBotToArmy} />
    </div>
  )
}

export default BotsPage;