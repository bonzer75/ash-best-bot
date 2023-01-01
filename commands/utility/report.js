const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
require("dotenv").config()

module.exports = (client, message, args) => {
    const server = message.guild;

    let dev = client.users.cache.get(process.env.OWNER)
    let report = args.join(' ');
	if(!report) return

    let embed = new Discord.MessageEmbed()
        .setTitle('Padre, tienes un mensaje nuevo')
   	    .setDescription(report)
  	    .setColor(0xe51a4c)
   	    .addField('Servidor', `${server.name} __${server.id}__`)
        .addField('Usuario', `${message.author.tag} __${message.author.id}__`)

    try {
        dev.send(embed)
    } catch (err) {
        message.channel.send("Algo sali� muy mal... ```" + err + "``` ");
    }
   //you need to allow direct server messages... i should rework this later
}