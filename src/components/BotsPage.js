import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botsData, setBotsData] = useState([]);
  const [clickedBots, setClickedBots] = useState([]);
  const [botsInArmy, setBotsInArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((botsData) => setBotsData(botsData))
      .catch((error) => console.error("Failed to fetch Bot Data", error));
  }, []);

  function handleDeleteBot(deletedBot) {
    const dischargedBots = botsData.filter((bot) => bot.id !== deletedBot.id);
    setBotsData(dischargedBots);
  }

  function sendBotToArmy(bot) {
    if (!clickedBots.some((clickedBot) => clickedBot.id === bot.id)) {
      setClickedBots([...clickedBots, bot]);

      if (!botsInArmy.includes(bot.id)) {
        setBotsInArmy([...botsInArmy, bot.id]);
      }
    } else {
      window.alert(`${bot.name} is already enlisted in the army!`);
    }
  }

  function removeBotFromArmy(botId) {
    const updatedBotArmy = clickedBots.filter((bot) => botId !== bot.id);
    setClickedBots(updatedBotArmy);
  }

  return (
    <div>
      <YourBotArmy clickedBots={clickedBots} removeBotFromArmy={removeBotFromArmy} />
      <BotCollection botsData={botsData} sendBotToArmy={sendBotToArmy} handleDeleteBot={handleDeleteBot} />
    </div>
  );
}

export default BotsPage;
