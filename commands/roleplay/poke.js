const Discord = require('discord.js');
const client2 = require('nekos.life');
const neko = new client2();

module.exports = async(client, message, args) => {
	let GIF = await neko.sfw.poke();
	let sub = message.mentions.users.first() || client.user
	let embed = new Discord.MessageEmbed()
		.setColor(0xe51a4c)
		.setTitle(`**${message.author.username}** le hace... no sé que es "poke" a **${sub.username}**`)
		.setImage(GIF.url)
		.setFooter("Es como, molestarle la cara, no sé como describirlo")
	message.channel.send(embed);
}