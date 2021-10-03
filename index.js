const Discord = require('discord.js');
const client = new Discord.Client();
const { MusicBot } = require('discord-music-system');

let { readdirSync } = require('fs');

client.config = require('./config.js');

client.ownerid = require('./config.js');

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

  client.login("Nzk1Nzc0MDIzMDc3MzMwOTU0.X_OQTw.EW1GUAfUANJ_Letj4cCwX_knGBg")
  .then(() => {
    console.log(`${client.user.tag} Estoy en línea`);

  })
  .catch((err) => {

    console.error("Error al iniciar sesión: " + err);

  });

  client.on('message', (message) => {
    if(message.content.startsWith(`#play`)) {
    message.reply("hola, puedes mirar mis comandos con **sudo help**, recuerda que **sudo ** es mi prefijo pendejo")
   	 }
    })

  client.musicBot = new MusicBot(client, {
    ytApiKey: "AIzaSyCT8AehcWSM2cmWMRPiSIw5mV815Xcv6iM",
    prefix: 'sudo ',
    language: 'es'
  });
