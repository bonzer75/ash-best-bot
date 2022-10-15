module.exports = (client, message, args) => {
    const dc = parseInt(args[0], 10);

		if (!dc || dc < 1 || dc > 100) return;

		//console.log(deleteCount)

		message.channel.bulkDelete(dc + 1)
		message.reply("Los mensajes han sido eliminados")
}
