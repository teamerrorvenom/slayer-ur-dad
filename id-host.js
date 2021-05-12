const discord = require("discord.js-selfbot");
const client = new discord.Client();
require("./index.js")
client.on("ready", () => {
  console.log(`${client.user.username} is ready now`) 
client.user.setActivity(`ALeXa OP`, { type: "PLAYING" });
});
client.login(process.env.me);


/*
const client2 = new discord.Client();
client2.on("ready", () => {
  console.log(`${client2.user.username} is ready now`) 
client2.user.setActivity(`VEnoM OP`, { type: "PLAYING" });
});
client2.login(process.env.me2);


/*------------------------------------
const client3 = new discord.Client();
client3.on("ready", () => {
  console.log(`${client.user.username} is ready now`) 
client3.user.setActivity(`F*CKING HATERS ON TOP OF MY D*CK`, { type: "PLAYING" });
});
client3.login(process.env.me3);

const client4 = new discord.Client();
client4.on("ready", () => {
  console.log(`${client.user.username} is ready now`) 
client4.user.setActivity(`F*CKING HATERS ON TOP OF MY D*CK`, { type: "PLAYING" });
});
client.login(process.env.me4);
------------------------------------*/