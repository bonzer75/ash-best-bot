module.exports = (client, message) => {
    let ping = Math.floor(message.client.ws.ping);
    let sub = message.mentions.members.first();
    
	message.channel.send("Nuestro ping es de: **" + ping + "ms**");

	if(message.author.tag == "Bonzer#6022" && sub.user.tag == "Lucy <3#2151") {
		console.log("Siuuuuuuuuuu")
	}
}