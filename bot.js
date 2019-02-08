const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543480397342703676")
setInterval(function() {
channel.send(`احا احا يعمو`);
}, 30)
})

client.login("NTI5MDcwODk1NzI2MTk4ODA0.Dz9K7g.eyxStatx3FRVZrYipvtK_WKAJeE");
