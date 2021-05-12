const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
 // info: {
    name: "whitelistserver",
    description: "whitelist a server",
    usage: "<server-id>",
    aliases: ["wls"], 
    category: "developer", 
//  },
  run: async function(client, message, args) {
if(message.author.id === "782639248007757824" || message.author.id === "631744856259297286" || message.author.id === "765072162838282291"){
    const server = args[0];
    var serverm = client.guilds.cache.get(server);
    if (!server) return message.channel.send({embed: {title: "ID MISSING", description: "GIVE THAT SERVER ID", footer: "©SLAYER | VENOM OP", color: process.env.COLOR2}});
    const blacklisted2 = db.fetch(`blacklistedservers_${serverm.id}`);

    if (blacklisted2 !== false) {
      message.channel.send({embed: {title: "SUCCESSFUL", description: `DONE ${serverm}  IS NOW WHITELISTED`, footer: "©SLAYER | VENOM OP", color: process.env.COLOR}}) 
      db.set(`blacklistedservers_${serverm.id}`, false);
    } else if (blacklisted2 === false){
      return message.channel.send({embed: {title: "ALREADY WHITELISTED", description: `${serverm} WASN'T BLACKLISTED IT'S ALREADY WHITELISTED`, footer: "©SLAYER | VENOM OP", color: process.env.COLOR2}}) 
    }
 } else { message.reply({embed: {description: "ERROR 6969: MISSING DEVELOPER RIGHTS 😒", color: process.env.COLOR2, title: "DEVELOPER COMMAND", footer: "©SLAYER | VENOM OP"}})
  }
}
}; 
