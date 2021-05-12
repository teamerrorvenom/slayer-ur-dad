const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  aliases: ["latency"], 
  usage: "", 
  description: "Returns latency and API ping",
  run: async function (client, message, args) {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RED")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}