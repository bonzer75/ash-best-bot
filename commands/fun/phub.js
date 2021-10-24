const Discord = require("discord.js");

module.exports = (client, message, args) => {
	message.channel.bulkDelete(1);
	let txt = args.join('%20');
		if (!txt) return message.channel.send("Disculpa?")

	let autor = message.author;
	let atch = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`, 'logo.png')
	message.channel.send(atch)
}