const { prefix } = require("./config.json");
//const { config } = require("dotenv");
const db = require("quick.db");
const Canvas = require('canvas');
const {applyText} = require ('canvas')
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});

require("./uptime.js");
//require("./id-host.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(` ${client.user.username} is turned on`);
  client.user.setActivity(`+help | +invite`, { type: "WATCHING" });
});

client.on("message", async message => {
  
  /*
    if (message.content.match(`^<@!?782639248007757824>( |)$`)) {
    return message.channel.send(
      "WO BUSY PERSON HAI TAG MAT KARO WARNA BAN MAR DEGA"
    );
  }

  
  //if (message.author.bot) return;
  if (blacklisted === true) return;
  if (blacklisted2 === true) return;
  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(mention)) {
    const reply = new discord.MessageEmbed()
      .setTitle(`${client.user.username} BOT`)
      .setDescription(
        `PREFIX: ${process.env.PREFIX}\nINVITE: [CLICK TO ADD ME](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2088234238)\nSUPPORT SERVER: [discord.gg/support](https://discord.gg/UV3Z39N9uE)`
      )
      .setColor("YELLOW");
    message.channel.send(reply);
  }*/
  const blacklisted = db.fetch(`blacklistedusers_${message.author.id}`);
  const blacklisted2 = db.fetch(`blacklistedservers_${message.guild.id}`);
  
  if (blacklisted === true) return;
  if (blacklisted2 === true) return;
  
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply({embed: {title: `${client.user.username} BOT`, description: `¿I THINK YOU JUST GOT LOST?\nTYPE: ${process.env.PREFIX}help\nTYPE: ${process.env.PREFIX}support TO CONTACT DEVELOPER'S`, color: "process.env.COLOR", footer: "© SLAYER | VENOM OP"}});
  }

  if (message.author.bot) return;
  if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

client.login(process.env.TOKEN);
