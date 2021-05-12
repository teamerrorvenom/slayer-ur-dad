const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
 // info: {
    name: "blacklistserver",
    description: "blacklist a server",
    usage: "<server id>",
    aliases: ["bls"], 
    category: "developer", 
//  },
  run: async function(client, message, args) {
if(message.author.id === "782639248007757824" || message.author.id === "631744856259297286" || message.author.id === "765072162838282291"){
    const server = args[0];
    if (server === "398954502583091204") return message.reply({embed: {title: "CANNOT BLACKLIST", description: "I AM NOT ALLOWED TO BLACKLIST THIS SERVER ☺", color: process.env.COLOR2, footer: "©SLAYER | VENOM OP"}});
    var serverm = client.guilds.cache.get(server);
    if (!server) return message.channel.send({embed: {title: "SERVER ID MISSING", description: "GIVE THAT SERVER ID", footer: "©SLAYER | VENOM OP", color: process.env.COLOR2}});
    const blacklisted2 = db.fetch(`blacklistedservers_${serverm.id}`);

    if (blacklisted2 !== true) {
      message.channel.send({embed: {title: "SUCCESSFUL", description: `DONE ${serverm} IS NOW IN THE BLACKLISTED LIST`, footer: "©SLAYER | VENOM OP", color: process.env.COLOR}}) 
      db.set(`blacklistedservers_${serverm.id}`, true);
    } else if (blacklisted2 === true){
      return message.channel.send({embed: {title: "ALREADY BLACKLISTED", description: `${serverm} IS ALREADY THERE IN THE BLACKLISTED LIST`, footer: "©SLAYER | VENOM OP", color: process.env.COLOR2}}) 
    }
 } else { message.reply({embed: {description: "ERROR 6969: MISSING DEVELOPER RIGHTS 😒", color: process.env.COLOR2, title: "DEVELOPER COMMAND", footer: "©SLAYER | VENOM OP"}})
  }
}
};