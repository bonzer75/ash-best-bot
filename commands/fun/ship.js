const star = require('star-labs');
const Discord = require("discord.js");

module.exports = (client, message, args, config) => {
    let err = args[1]
	let sub1 = message.mentions.users.first()
	let sub2 = message.mentions.users.last()

		if (!sub1) return message.channel.send("Disculpa?")
		if (!err && sub1 === message.author) return message.channel.send("No puedo creer que enserio hayas pensado que la única persona con la cual podrías tener una relación es contigo mismo, tan patético eres? no consigues que alguien te quiera?")
		if (sub1 === client.user || sub2 === client.user) return message.channel.send("No puedes shipearme con nadie")

		if(!err) {sub2 = message.author}

	let msg1 = (`Yo digo que **${sub1.username}** y **${sub2.username}**`)

	//trucazo para que siempre lucy y yo seamos ganadores
	if (sub2.id == config.owner[1] || sub2.id == config.wife[1]) {
		if(sub1.id == config.owner[1] || sub1.id == config.wife[1]) {
			const embed = new Discord.MessageEmbed()
			.setTitle(`En respuesta a: ${message.author.username}`)
			.setDescription(`${msg1} son compatibles un... **100%**:sparkling_heart:			      [█████]`)
			.setFooter(`VIVAN LOS NOBIOSS`)
			.setColor(0xe51a4c)
			.setImage(`https://i.imgur.com/9lAbz2a.gif`)
			return message.channel.send(embed)
		}
	}

	//if(message.author.id == config.owner[1])

	const random = Math.floor(Math.random() * 100)

		if (random === 100) {
			emoji = ':sparkling_heart:';
			img = 'https://i.imgur.com/9lAbz2a.gif';
			lvl = '[█████]'

		} else if (random < 10) {
			emoji = ':broken_heart:';
			img = star.suicide();
			lvl = '[_____]'

		} else if (random < 20) {
			emoji = ':regional_indicator_f:';
			img = star.cry();
			lvl = '[_____]'

		} else if (random < 30) {
			emoji = ':pensive:';
			img = star.cry();
			lvl = '[█____]'

		} else if (random < 40) {
			emoji = ':pensive:';
			img = star.slap();
			lvl = '[█____]'

		} else if (random < 50) {
			emoji = ':neutral_face:';
			img = star.happy()
			lvl = '[██___]'

		} else if (random < 60) {
			emoji = ':thumbsup:';
			img = star.hug();
			lvl = '[██___]'

		} else if (random < 70) {
			emoji = ':thumbsup:';
			img = star.hug();
			lvl = '[███__]'

		} else if (random < 80) {
			emoji = ':smirk:';
			img = star.blush();
			lvl = '[███__]'

		} else if (random < 90) {
			emoji = ':flushed:';
			img = star.blush();
			lvl = '[████_]'

		} else if (random < 100) {
			emoji = ':heart:';
			img = star.kiss();
			lvl = '[████_]'
		}
		let i = ['Fuente: Miami me lo confirmó', 'Fuente: de agua', 'Fuente: Yo',
			'Fuente: Arial 12', 'Fuente: de poder'
		]
		let msg2 = i[Math.floor(Math.random() * i.length)]

		const embed = new Discord.MessageEmbed()
			.setTitle(`En respuesta a: ${message.author.username}`)
			.setDescription(`${msg1} son compatibles un... **${random}%**${emoji}			      ${lvl}`)
			.setFooter(`${msg2}`)
			.setColor(0xe51a4c)
			.setImage(`${img}`)
		
		message.channel.send(embed)
} 