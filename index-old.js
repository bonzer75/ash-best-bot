//las variables necesarias y constantes
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const reddit = require('reddit-fetch')
const star = require('star-labs');

const client2 = require('nekos.life');
const neko = new client2();

let prefix = config.prefix

//evento ready con multiples juegos

client.on("ready", () => {
	console.log("Bot en línea " + client.user.tag);
	client.user.setPresence({
		status: "online",
		activity: {
			name: 'Apex Legends™',
			type: "PLAYING"
		}
	});
});

//finalmente los comandos
client.on("message", (message) => {

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	const {MessageEmbed} = require('discord.js')

	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'help')) {
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
						console.error(error)
					}
					m.edit(embed2);
				}
				if (reaction.emoji.name === '3️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						console.error(error)
					}
					m.edit(embed3);
				}
				if (reaction.emoji.name === '4️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						console.error(error)
					}
					m.edit(embed4);
				}

				if (reaction.emoji.name === '5️⃣') {
					try {
						for (const reaction of userReactions.values()) {

							reaction.users.remove(user.id);
						}
					} catch (error) {
						console.error(error)
					}
					m.edit(embed5);
				}
				if (reaction.emoji.name === '6️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						console.error(error)
					}
					m.edit(embed6);
				}
				if (reaction.emoji.name === '1️⃣') {
					try {
						for (const reaction of userReactions.values()) {
							reaction.users.remove(user.id);
						}
					} catch (error) {
						console.error(error)
					}
					m.edit(embed1);
				}
			})
		})
	}

	if (message.content.startsWith(prefix + 'ping')) {
		let ping = Math.floor(message.client.ws.ping);
		message.channel.send("Nuestro ping es de: **" + ping + "ms**");
	}

	if (message.content.startsWith(prefix + 'stats')) {
		message.channel.send("Aquí están los stats de nuestro servidor")

		let server = message.guild;


	}

	if (message.content.startsWith(prefix + 'cls')) {
		const dc = parseInt(args[0], 10);

		if (!dc || dc < 1 || dc > 100) return;

		//console.log(deleteCount)

		message.channel.bulkDelete(dc + 1)
		message.reply("Los mensajes han sido eliminados")

	}

	if (message.content.startsWith(prefix + 'say')) {
		let txt = args.join(" ");
		if (!txt) return message.channel.send("Disculpa?");

		message.channel.send(txt);
	}

	if (message.content.startsWith(prefix + 'invite')) {
		message.channel.send("https://discord.com/oauth2/authorize?client_id=795774023077330954&scope=bot&permissions=0");
	}

	if (message.content.startsWith(prefix + 'secret')) {
		let txt = args.join(" ");
		if (!txt) return message.channel.send("Disculpa?");
		message.channel.bulkDelete(1);

		message.channel.send({
			embed: {
				color: 2292676,
				title: "Confesión Anónima:",
				description: txt
			}
		});
	}

	if (message.content.startsWith(prefix + 'phub')) {
		message.channel.bulkDelete(1);
		let txt = args.join('%20');
		if (!txt) return message.channel.send("Disculpa?")

		let autor = message.author;
		let atch = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`, 'logo.png')
		message.channel.send(atch)
	}

	if (message.content.startsWith(prefix + '8ball')) {
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

	if (message.content.startsWith(prefix + 'ship')) {
		let err = args[1]
		let sub1 = message.mentions.users.first()
		let sub2 = message.mentions.users.last()

		if (!sub1) return message.channel.send("Disculpa?")
		if (!err && sub1 === message.author) return message.channel.send("No puedo shiparte contigomismo, así no funciona")
		if (sub1 === client.user || sub2 === client.user) return message.channel.send("No puedes shipearme con nadie")

		let msg1 = (`Yo digo que **${sub1.username}** y **${sub2.username}**`)
		if (!err) {
			msg1 = (`Yo digo que **${sub1.username}** y **${message.author.username}**`)
		};

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

	if (message.content.startsWith(prefix + 'kill')) {
		let sub = message.mentions.users.first();

		if (!sub) return message.channel.send("Disculpa?")
		if (sub === message.author) return message.channel.send("No puedes eliminarte a ti mismo a menos que uses una granada");
		if (sub === client.user) return message.channel.send("Aunque si de verdad quisieras enfrentarte a mí no tendrías oportunidad")

		let respo = [`https://i.imgur.com/xszTn7w.gif`, `https://i.imgur.com/v0uKtzd.gif`, `https://i.imgur.com/72COabV.gif`,
			`https://i.imgur.com/V2q5bpi.gif`, `https://i.imgur.com/BwyWvkt.gif`
		]
		let i = respo[Math.floor(Math.random() * respo.length)]

		const embed = new Discord.MessageEmbed()
			.setTitle('Baja Confirmada')
			.setDescription(`El piloto **${message.author.username}** eliminó a **${sub.username}**`)
			.setColor(0xe51a4c)
			.setImage(`${i}`)
		message.channel.send(embed);
	}

	if (message.content.startsWith(prefix + 'impostor')) {
		let sub = message.mentions.members.first()

		let random = [
			"was not An Impostor.",
			"was not An Impostor.",
			"was An Impostor."
		]

		if (!sub) return message.channel.send(`Disculpa?`)

		message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.

        　　　.　　　 　　.　　　　　。　　 。　. 　

        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

        　　ﾟ　　 ${sub.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.

        　　'　　　 ${Math.floor(Math.random() * 2) + 1} Impostor remanins. 　 　　。

        　　ﾟ　　　.　　　. ,　　　　.　 .`)
	}

	if (message.content.startsWith(prefix + 'summon')) {
		let mod = message.member.hasPermission("BAN_MEMBER")
		if (!mod) return message.reply("Lo siento, no tienes suficiente rango como para hacer eso piloto")

		let sub = message.mentions.members.first();
		if (!sub) return message.channel.send("Disculpa?");

		sub.send(`En nuestro servidor te han invocado, ve a atender la solicitud`)

		const embed = new Discord.MessageEmbed()
			.setTitle(`Ritual de Invocación`)
			.setDescription(`Han invocado a **${sub.user.username}**, estamos en espera de su aparición`)
			.setColor(0xe51a4c)
			.setImage('https://media1.tenor.com/images/ebef644b17ba3057d3055b579d380a1f/tenor.gif?itemid=9997985')
		message.channel.send(embed);
	}

	if (message.content.startsWith(prefix + 'reset')) {
		let mod = message.member.hasPermission("ADMINISTRATOR")
		if (!mod) return message.reply("Lo siento, no tienes suficiente rango como para hacer eso piloto")

		var chnnl = message.channel.position
		message.channel.clone().then((canal) => {

			message.channel.delete()
			canal.setPosition(chnnl)
			canal.send("**El canal ha sido reseteado**")
		})
	}

	if (message.content.startsWith(prefix + 'dice')) {
		let dado = ['https://i.imgur.com/kqOXGzK.jpg', 'https://i.imgur.com/KcULtFy.jpg', 'https://i.imgur.com/I8VCCan.jpg',
			'https://i.imgur.com/K9dy5AV.jpg', 'https://i.imgur.com/kdJWvuE.jpg', 'https://i.imgur.com/sHGuwzP.jpg'
		];

		const embed = new Discord.MessageEmbed()
			.setColor(0xe51a4c)
			.setTitle(`Está bien ${message.author.username}, voy a tirar el dado...`)
			.setImage(`${dado}`)

		message.channel.send(embed);
	}

	if (message.content.startsWith(prefix + 'dm')) {
		let txt = args.join(" ");
		if (!txt) return message.channel.send("Disculpa?");

		message.author.send('https://i.pinimg.com/originals/1c/39/33/1c3933bbf90042d41dc340757b1f8805.gif');
	}

	if (message.content.startsWith(prefix + 'kick')) {
		message.author.send(txt);
	}

	if (message.content.startsWith(prefix + 'avatar')) {
		let sub = message.mentions.users.first() || message.author

		const embed = new Discord.MessageEmbed()
			.setImage(`${sub.displayAvatarURL()}`)
			.setTitle(`Aquí está el avatar de ${sub.username}`)
			.setColor(0xe51a4c)

		message.channel.send(embed);
	}

	if (message.content.startsWith(prefix + 'rate')) {
		let sub = message.mentions.users.first()
		let err = args.slice().join(" ")

		if (!err) return message.channel.send("Eh?")
		if (sub === client.user) return message.channel.send("Jaja, no");

		let num = ["1/5 :thumbsdown:", "2/5 :thumbsdown:", "3/5 :thumbsup:", "4/5 :thumbsup:", "5/5 :ok_hand:"]
		let rate = num[Math.floor(Math.random() * num.length)]

		if (!sub) return message.channel.send({
			embed: {
				color: 2292676,
				title: `En respuesta a ${message.author.username}`,
				description: `Hmmm, yo le doy a **${err}** un ${rate}`
			}
		});

		message.channel.send({
			embed: {
				color: 2292676,
				title: `En respuesta a ${message.author.username}`,
				description: `Hmmm, yo le doy a **${sub.username}** un ${rate}`
			}
		});
	}

	if(message.content.startsWith(prefix + 'report')) {
    		const server = message.guild;

    		let dev = client.users.cache.get('505479082771873802')
    		let report = args.join(' ');
			if(!report) return message.channel.send('Ja ja, si no tienes nada que reportar. no me hagas perder el tiempo')

    		const embed = new Discord.MessageEmbed()
    		.setTitle('Padre, tienes un mensaje nuevo')
   			.setDescription(report)
  			.setColor(0xe51a4c)
   			.addField('Servidor', `${server.name} __${server.id}__`)
  			.addField('Usuario', `${message.author.tag} __${message.author.id}__`)

  		dev.send(embed)
 	 }

	if (message.content.startsWith(prefix + 'meme')) {
		let a = ['Spanishmeme', 'memeshumedos', 'MemesEnEspanol', 'memexico', 'MemesESP', 'animemes', 'MinecraftMemes']
		let source = a[Math.floor(Math.random() * a.length)]

		reddit({
			subreddit: `${source}`,
			sort: 'hot',
			allowNSFW: false,
			allowModPost: false,
			allowCrossPost: false,
			allowVideo: false
		}).then(post => {

			const embed = new MessageEmbed()
				.setColor(0xe51a4c)
				.setTitle(post.title)
				.setImage(post.url)
			message.channel.send(embed)
		})
	}
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(prefix + 'join')) {
		const chl = message.member.voice.channel;
		if (!chl) return message.channel.send("Disculpa?, no estás en un canal")

		const poder = chl.permissionsFor(message.client.user);
		if (!poder.has('CONNECT') || !poder.has('SPEAK')) {
			return message.channel.send("Lo siento piloto, no puedo")
		}
		try {
			var connect = await chl.join();
		} catch (err) {

		}
	}

	if (message.content.startsWith(prefix + 'leave')) {
		const chl = message.member.voice.channel;
		if (!chl) return message.channel.send("Disculpa?")

		const poder = chl.permissionsFor(message.client.user);
		if (!poder.has('CONNECT') || !poder.has('SPEAK')) {
			return message.channel.send("Disculpa?")
		}
		try {
			var connect = await chl.leave();
		} catch (err) {

		}
	}

	if (message.content.startsWith(prefix + 'wasted')) {
		let sub = message.mentions.users.first() || client.user

		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} asesinó brutalmenete a ${sub.username}`)
			.setColor(0xe51a4c)
			.setImage(star.kill())

		message.channel.send(embed)
	}

	if (message.content.startsWith(prefix + 'feed')) {
		async function feed() {
				let GIF = await neko.sfw.feed();
				let sub = message.mentions.users.first() || client.user
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author.username} le ha da de comer a ${sub.username}`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            feed();
	}

	if (message.content.startsWith(prefix + 'kiss')) {
		async function kiss() {
				let GIF = await neko.sfw.kiss();
				let sub = message.mentions.users.first() || client.user
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author.username} le ha dado un beso a ${sub.username} que agradable sujeto`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            kiss();
	}

	if (message.content.startsWith(prefix + 'hug')) {
		async function hug() {
				let GIF = await neko.sfw.hug();
				let sub = message.mentions.users.first() || client.user
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author.username} le ha dado un abrazo a ${sub.username} que agradable sujeto`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            hug();
	}

	if (message.content.startsWith(prefix + 'slap')) {
		async function slap() {
				let GIF = await neko.sfw.slap();
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author} es un asqueroso estúpido`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            slap();
	}

	if (message.content.startsWith(prefix + 'cry')) {
		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} está llorando... que llore`)
			.setColor(0xe51a4c)
			.setImage(star.cry())

		message.channel.send(embed)
	}

	if (message.content.startsWith(prefix + 'dance')) {
		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} está bailando wtf`)
			.setColor(0xe51a4c)
			.setImage(star.dance())

		message.channel.send(embed)
	}

	if (message.content.startsWith(prefix + 'blush')) {
		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} se sonrojó que gei`)
			.setColor(0xe51a4c)
			.setImage(star.blush())

		message.channel.send(embed)
	}

	if (message.content.startsWith(prefix + 'cuddle')) {
		async function cuddle() {
				let GIF = await neko.sfw.cuddle();
				let sub = message.mentions.users.first() || client.user
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author.username} se acurruca en ${sub.username} `)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            cuddle();
	}

	if (message.content.startsWith(prefix + 'baka')) {
		async function baka() {
				let GIF = await neko.sfw.baka();
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author} es un asqueroso estúpido`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            baka();
	}

	if (message.content.startsWith(prefix + 'smug')) {
		async function smug() {
				let GIF = await neko.sfw.smug();
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author} hace una mirada con doble sentido... que asco`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            smug();
	}

	if (message.content.startsWith(prefix + 'neko')) {
		async function neko() {
				let GIF = await neko.sfw.neko();
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author} aqui tienes tu neko otaku qliao`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            neko();
	}

	if (message.content.startsWith(prefix + 'waifu')) {
		async function waifu() {
				let GIF = await neko.sfw.waifu();
				let embed = new Discord.MessageEmbed()
					.setColor(0xe51a4c)
					.setTitle(`${message.author.username} aqui tienes tu waifu otaku qliao`)
					.setImage(GIF.url)
				message.channel.send(embed);
            }
            waifu();
  }

  if (message.content.startsWith(prefix + 'doom')) {
		message.channel.send(">p https://www.youtube.com/watch?v=-B19u9tHnIs&ab_channel=Treyarch-Topic")
  }
});

client.login(process.env.TOKEN);
