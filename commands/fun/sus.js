module.exports = (client, message, args) => {
	let sub = message.mentions.members.first()

	let random = [
		"was not An Impostor.",
		"was not An Impostor.",
		"was An Impostor. Is sus"
	]

	if (!sub) return message.channel.send(`Disculpa?`)
	console.log(sub.user.id)

	message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.

        　　　.　　　 　　.　　　　　。　　 。　. 　

        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

        　　ﾟ　　 ${sub.user.tag} ${random[Math.floor(Math.random() * random.length)]} 　 。　.

        　　'　　　 ${Math.floor(Math.random() * 2) + 1} Impostor remanins. 　 　　。

        　　ﾟ　　　.　　　. ,　　　　.　 .`)
}