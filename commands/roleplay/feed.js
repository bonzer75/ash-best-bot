const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = require('nekos.life');
const neko = new client2();

module.exports = (client, message, args, config) => {
	async function kiss() {
		let GIF = await neko.sfw.kiss();
		let sub = message.mentions.users.first() || client.user
		let embed = new Discord.MessageEmbed()
			.setColor(0xe51a4c)
			.setTitle(`**${message.author.username}** le ha dado un beso a **${sub.username}** que agradable sujeto`)
			.setImage(GIF.url)
		message.channel.send(embed);
    }
    kiss();
}