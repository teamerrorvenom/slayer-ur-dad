const { MessageEmbed } = require("discord.js");
//const discord = require("discord.js")
module.exports = {
    category: "misc", 
    name: "avatar",
    description: "show's user avatar",
    usage: "av @mention",
    aliases: ["av"],
  run: async function (client, message, args) {
let target; 
if (message.mentions.users.first()) 
{ 
  target = message.mentions.users.first(); 
  
} else 
if (args[0]) 
{ 
  target = message.guild.members.cache.get(args[0]).user; } else 
  { 
    target = message.author; 
  } 
  message.delete(); 
  let avatar = target.displayAvatarURL({ dynamic: true, size: 2048 }); 
  let embed = new MessageEmbed() 
  .setTitle( ` AVATAR of ${target.username} ` )
  .setDescription(`[Download](${avatar})`)
  .setImage(avatar)
  .setColor("#FF0000") 
  .setFooter(`Requested by ${message.author.username}`); 
 message.channel.send(embed);
  }
};