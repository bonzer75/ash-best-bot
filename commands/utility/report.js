const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
require("dotenv").config()

module.exports = (client, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setTitle('Cómo reportar un bug')
   	    .setDescription("Gracias por tu apoyo e interés, pero necesitamos que nos digas que pasó, puedes hacer el reporte en Github y mi padre lo verá")
  	    .setColor(0xe51a4c)
        .addField('Este es el link:', `https://github.com/bonzer75/ash-best-bot/issues`)

    message.channel.send("Algo salió muy mal... ```" + err + "``` ");
   //you need to allow direct server messages... i should rework this later
}
