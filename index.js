const Discord = require('discord.js');
const client = new Discord.Client();
const { MusicBot } = require('discord-music-system');

let { readdirSync } = require('fs');

client.config = require('./config.js');

//require("dotenv").config()

client.commands = new Discord.Collection();

for(const file of readdirSync('./commands/')) {

    if(file.endsWith(".js")) {

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./commands/${file}`);

    client.commands.set(fileName, fileContents);
    }
  }

  for(const file of readdirSync('./events/')) {

    if(file.endsWith(".js")){

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./events/${file}`);

    client.on(fileName, fileContents.bind(null, client));

    delete require.cache[require.resolve(`./events/${file}`)];
    }
  }

  client.login(process.env.TOKEN)
  .then(() => {
    console.log(`${client.user.tag} Estoy en línea`);

  })
  .catch((err) => {

    console.error("Error al iniciar sesión: " + err);

  });

  client.musicBot = new MusicBot(client, {
    ytApiKey: process.env.YT,
    prefix: '#', // Your bot prefix
    language: 'es' // fr, en, es, pt
  });
