const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  category: "unique",
  name: "binary",
  description: "Shows your text in Binary Format",
  aliases: ["binary"],
  usage: "<text>",

  run: async function(client, message, args) {
    const url = `http://some-random-api.ml/binary?text=${args}`;

    let response, data;
    try {
      response = await axios.get(url);
      data = response.data;
    } catch (e) {
      return message.channel.send(`An error occured, please try again!`);
    }

    const embed = new MessageEmbed()
      .setTitle("Text to Binary")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/820213678493663262/09ff4d519159ee3f90472ce0604d9774.webp?size=2048"
      )

      .setDescription("**Binary Code** - `" + data.binary + "`")
      .setTimestamp()
      .setFooter("Slayer OP", "")
      .setColor("#ffffff");

    await message.channel.send(embed);
  }
};
