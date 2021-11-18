module.exports = (client, message) => {
    let ping = Math.floor(message.client.ws.ping);
    
	message.channel.send("Nuestro ping es de: **" + ping + "ms**");
}