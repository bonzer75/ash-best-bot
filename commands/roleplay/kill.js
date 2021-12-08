const Discord = require("discord.js");

module.exports = (client, message, args) => {
	message.channel.send("imagen de", {files: "./img/e.png"})
}