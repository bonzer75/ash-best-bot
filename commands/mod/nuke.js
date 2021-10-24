module.exports = (client, message, args) => {
	let mod = message.member.hasPermission("ADMINISTRATOR")
		if (!mod) return message.reply("Lo siento, no tienes suficiente rango como para hacer eso piloto")

	var chnnl = message.channel.position
	message.channel.clone().then((canal) => {
		message.channel.delete()
		canal.setPosition(chnnl)
		canal.send("**El canal ha sido reseteado**")
	})
}