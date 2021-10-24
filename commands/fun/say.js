module.exports = (client, message, args) => {
    let txt = args.join(" ");
	if (!txt) return message.channel.send("Jaja no");

	message.channel.send(txt);
}