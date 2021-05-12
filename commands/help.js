const { MessageEmbed } = require("discord.js");
const prefix = require("../../config.json");
module.exports = {
  name: "help",
  description: "To show all Music commands",
  usage: "[command]",
  aliases: ["h", "madad", "madat", "maddad", "maddat"],

  run: async function (client, message, args) {
    var allcmds = "";

    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info;

      allcmds += "`" /*+ client.config.prefix */+ cmd.name + "`" + ", ";

      // " " +

      //cmdinfo.usage +

      //   "` ~ " +

      //   cmdinfo.description +

      // "\n";
    });

    let embed = new MessageEmbed()

      .setAuthor("Commands of " + client.user.username)

      .setColor(process.env.COLOR)

      .setDescription(allcmds)

      .setFooter(
        `To get info of each command you can do ${process.env.PREFIX}help [command]`
      );

    if (!args[0]) return message.channel.send(embed);
    else {
      let cmd = args[0];

      let command = client.commands.get(cmd);

      if (!command)
        command = client.commands.find(x => x.aliases.includes(cmd));

      if (!command) return message.channel.send("Unknown Command");

      let commandinfo = new MessageEmbed()

        .setTitle("Command: " + command.name + " info")

        .setColor(process.env.COLOR2).setDescription(`

NAME: ${command.name}
CATEGORY: ${command.category}
DESCRIPTION: ${command.description}
USAGE: \`${process.env.PREFIX}${command.name} ${command.usage}\`
ALIASES: ${command.aliases.join(", ")}

`);

      message.channel.send(commandinfo);
    }
  }
};
