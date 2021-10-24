module.exports = (client, message, args) => {
    let txt = args.slice().join(" ")
	if (!txt) return message.channel.send("Necesito una pregunta.");

	let respuestas = ["En mi opinion, si", "Es cierto", "Decididamente asi es", "Probablemente",
		"Es un buen pronostico, yo diría que sí", "Al parecer si", "De pronto, tal vez", "Sin duda", "Si", "Definitivamente si",
		"Debes confiar en eso", "No lo sé", "Estoy un poco ocupada, regunta en otro momento",
		"No puedo decirtelo", "Eso es algo que no puedo predecir", "Concentrate y vuelve a preguntar",
		"Puede ser", "Tal vez no", "Es bastante probable que no", "Absolutamente no, no lo dudes",
		"La situación actual es poco faborable, yo diría que no", "Muy dudoso", "No", "No hay duda, no"
	]

	const embed = new Discord.MessageEmbed()
		.setColor(0xe51a4c)
		.setTitle(`Respondiendo a la pregunta de ${message.author.username}...`)
		.setDescription(`${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)
	message.channel.send(embed);
}