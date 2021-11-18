module.exports = (client, message, args) => {
	let mod = message.member.hasPermission("BAN_MEMBER")
		if (!mod) return message.reply("Lo siento, no tienes suficiente rango como para hacer eso piloto")

	let sub = message.mentions.members.first();
		if (!sub) return message.channel.send("Disculpa?");

	sub.send(`En nuestro servidor te han invocado, ve a atender la solicitud`)

	const embed = new Discord.MessageEmbed()
		.setTitle(`Ritual de Invocación`)
		.setDescription(`Han invocado a **${sub.user.username}**, estamos en espera de su aparición`)
		.setColor(0xe51a4c)
		.setImage('https://media1.tenor.com/images/ebef644b17ba3057d3055b579d380a1f/tenor.gif?itemid=9997985')
	message.channel.send(embed);
}