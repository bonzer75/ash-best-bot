module.exports = (client, message, args, config) => {
	let sub = message.mentions.users.first()
		if (sub === client.user) return message.channel.send("Jaja, no");
	let err = args.slice().join(" ")
		if (!err) return message.channel.send("Eh?")
		
	let num = ["1/5 :thumbsdown:", "2/5 :thumbsdown:", "3/5 :thumbsup:", "4/5 :thumbsup:", "5/5 :ok_hand:"]
	let rate = num[Math.floor(Math.random() * num.length)]

	if (!sub) return message.channel.send({
		embed: {
			color: 2292676,
			title: `En respuesta a ${message.author.username}`,
			description: `Hmmm, yo le doy a **${err}** un ${rate}`
		}
	});

	if (sub.id === config.owner[1] || sub.id === config.wife[1]) return message.channel.send({
		embed: {
			color: 2292676,
			title: `En respuesta a ${message.author.username}`,
			description: `Hmmm, yo le doy a **${sub.username}** un 5/5 :ok_hand:`
		}
	});

	message.channel.send({
		embed: {
			color: 2292676,
			title: `En respuesta a ${message.author.username}`,
			description: `Hmmm, yo le doy a **${sub.username}** un ${rate}`
		}
	});
}