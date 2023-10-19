const {EmbedBuilder, Events } = require("discord.js");


module.exports = {
  name: Events.VoiceStateUpdate,
  execute(oldState, newState) {
 
console.log(newState)


  if (newState.channelId && oldState.channelId && newState.channelId!=oldState.channelId) sendMessage(`<@${oldState.member.id }> switch voice channel from <#${oldState.channelId}> to <#${newState.channelId}>`, oldState);
  else if (!newState.channelId) sendMessage(`<@${oldState.member.id }> left voice channel <#${oldState.channelId}>`, oldState);
  else if (!oldState.channelId) sendMessage(`<@${newState.member.id }> join voice channel <#${newState.channelId}>`, newState);
  },
};


function sendMessage(text, state){
const bot = require('../index')
  


  const message = new EmbedBuilder()
  .setColor ('#a72479')
  .setAuthor ({name: state.member.user.displayName , iconURL:`https://cdn.discordapp.com/avatars/${state.member.id}/${state.member.user.avatar}.jpeg`})
  .setDescription (text)
  .setTimestamp()
  const channel = bot.channels.cache.get(process.env.DS_LOG_CHANNEL_ID)    
  channel.send({embeds: [message]})
}