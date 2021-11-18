const Discord = require('discord.js');
const client2 = require('nekos.life');
const neko = new client2();

module.exports = async(client, message, args) => {
	let GIF = await neko.sfw.smug();
	let embed = new Discord.MessageEmbed()
		setColor(0xe51a4c)
		.setTitle(`${message.author} hace una mirada con doble sentido... que asco`)
		.setImage(GIF.url)
	message.channel.send(embed);
}