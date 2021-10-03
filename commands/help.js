const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js')

module.exports = (client, message, args) => { 
    const embed1 = new Discord.MessageEmbed()
			.setTitle('Mis comandos y dcoumentación')
			.setDescription('Hola piloto, me presento, mi nombre es Ash, soy un bot de comandos divertidos y tengo funciones exclusivas para moderadores, en la siguiente imágen tienes una guia para acceder a todos mis comandos')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		const embed2 = new Discord.MessageEmbed()
			.setTitle('Comandos divertidos y juegos')
			.setDescription('Livin la vida loca ```rate <name>  ship <name>  8ball <msg>  impostor <name>  phub <msg>  dice  meme  join/leave say <msg>  neko```')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		const embed3 = new Discord.MessageEmbed()
			.setTitle('Comandos de Roleplay')
			.setDescription('```punch <name>  wasted <name>  kiss <name>  slap <name>  hug <name>  kill <name>  wink  dance  run  cry```')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		const embed4 = new Discord.MessageEmbed()
			.setTitle('Comandos útiles para mods')
			.setDescription('```stats  cls <num>  reset  summon <name>```')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		const embed5 = new Discord.MessageEmbed()
			.setTitle('Soporte e Información sobre mí')
			.setDescription('Fuí creada como un ligero proyecto de programación de Bonzer#6022, seré actualizada constantemente mientras mi desarrollador no pierda el interés en mi. También tengo un hermano llamado **Viper** pero él solo es un teaster```invite  ping  bug```')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		const embed6 = new Discord.MessageEmbed()
			.setTitle('Comandos de Música')
			.setDescription('```play <name>  skip  stop  queue  pause/resume```')
			.setColor(0xe51a4c)
			.setImage('https://cdn.discordapp.com/attachments/803018271652839474/833822787797254184/asg.png')

		message.channel.send(embed1).then(m => {
			m.react('1️⃣')
			m.react('2️⃣')
			m.react('3️⃣')
			m.react('4️⃣')
			m.react('5️⃣')
			m.react('6️⃣')
			m.awaitReactions((reaction, user) => {
				const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
				if (message.author.id !== user.id) return;

				if (reaction.emoji.name === '2️⃣') {
					try {
						for (const reaction of userReactions.values()) {

							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed2);
				}
				if (reaction.emoji.name === '3️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed3);
				}
				if (reaction.emoji.name === '4️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed4);
				}

				if (reaction.emoji.name === '5️⃣') {
					try {
						for (const reaction of userReactions.values()) {

							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed5);
				}
				if (reaction.emoji.name === '6️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed6);
				}
				if (reaction.emoji.name === '1️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						message.reply("Procura no usar este comando en dm")
					}
					m.edit(embed1);
				}
			})
		})
}