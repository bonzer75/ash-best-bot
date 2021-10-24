const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js')

module.exports = (client, message, args) => {
    const server = message.guild;

    let dev = client.users.cache.get(client.ownerid)
    let report = args.join(' ');
	if(!report) return

    let embed = new Discord.MessageEmbed()
        .setTitle('Padre, tienes un mensaje nuevo')
   	    .setDescription(report)
  	    .setColor(0xe51a4c)
   	    .addField('Servidor', `${server.name} __${server.id}__`)
  	    .addField('Usuario', `${message.author.tag} __${message.author.id}__`)
  	dev.send(embed)
}