module.exports = (client, message, args) => {
	let txt = args.join(" ");
		if (!txt) return message.channel.send("Disculpa?");
	message.channel.bulkDelete(1);

	message.channel.send({
		embed: {
			color: 2292676,
			title: "Confesión Anónima:",
			description: txt
		}
	});
}