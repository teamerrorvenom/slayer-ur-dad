const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
 // info: {
    name: "blacklist",
    description: "blacklist a user",
    usage: "@user",
    aliases: ["bl"],
    category: "developer", 
 // },
  run: async function (client, message, args) {
if(message.author.id === "782639248007757824" || message.author.id === "631744856259297286" || message.author.id === "765072162838282291"){

const user = message.mentions.users.first();
if(!user) return message.channel.send({embed: {title: "MISSING MENTION", description: "MENTION THE USER TO BLACKLIST", color: process.env.COLOR2, footer: "©SLAYER | VENOM OP"}});
if (user.id === "782639248007757824") return message.channel.send({embed: {title: "BAAP", description: "WO MENTIONED USER TERA BAAP HAI SAMJHA 🍷", color: process.env.COLOR2, footer: "©SLAYER | VENOM OP"}});
const blacklisted = db.fetch(`blacklistedusers_${user.id}`) 
if(blacklisted !== true) {
message.channel.send({embed: {title: "SUCCESSFUL", description: `DONE ${user.username} IS NOW IN THE BLACKLISTED USERS LIST`, color: process.env.COLOR, footer: "©SLAYER | VENOM OP"}}) 
db.set(`blacklistedusers_${user.id}`, true) 
} else {
        return message.channel.send({embed: {title: "ALREADY BLACKLISTED", description: "THE MENTIONED USER IS ALREADY IN THE BLACKLISTED USERS LIST", color: process.env.COLOR2, footer: "©SLAYER | VENOM OP"}}) 
}} else { message.reply({embed: {description: "ERROR 6969: MISSING DEVELOPER RIGHTS 😒", color: process.env.COLOR2, title: "DEVELOPER COMMAND", footer: "©SLAYER | VENOM OP"}})
}
  },
};
