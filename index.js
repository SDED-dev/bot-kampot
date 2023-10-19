require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ],
});

require("./handler/event") (bot)


bot.login(process.env.DS_TOKEN);
module.exports = bot 
