const Discord = require('discord.js');
const client2 = require('nekos.life');
const neko = new client2();

module.exports = async(client, message, args) => {
	let GIF = await neko.sfw.cuddle();
	let sub = message.mentions.users.first() || client.user
	let embed = new Discord.MessageEmbed()
		.setColor(0xe51a4c)
		.setTitle(`${message.author.username} se acurruca en ${sub.username} `)
		.setImage(GIF.url)
	message.channel.send(embed);
}