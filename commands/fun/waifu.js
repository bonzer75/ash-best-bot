const Discord = require('discord.js');
const client2 = require('nekos.life');
const neko = new client2();

module.exports = async(client, message, args, config) => {
	let GIF = await neko.sfw.waifu();
	let embed = new Discord.MessageEmbed()
		.setColor(0xe51a4c)
		.setTitle(`**${message.author.username}** aqui tienes tu waifu otaku qliao`)
		.setImage(GIF.url)
	message.channel.send(embed);
}