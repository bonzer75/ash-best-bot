const Discord = require('discord.js');
const client = new Discord.Client();
const { MusicBot } = require('discord-music-system');

const { readdirSync } = require('fs');
const config = require("./config.json");

//require("dotenv").config()

client.commands = new Discord.Collection();

for(const folder of readdirSync('./commands/')) {

  for(const file of readdirSync(`./commands/${folder}/`)) {

    if(file.endsWith(".js")) {

      let fileName = file.substring(0, file.length - 3);

      let fileContents = require(`./commands/${folder}/${file}`);

      client.commands.set(fileName, fileContents);
      }
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

  client.login(config.token)
  .then(() => {
    console.log(`${client.user.tag} v1.4.5 Estoy en línea`);

  })
  .catch((err) => {
    console.error("Err: " + err);

  });

  client.musicBot = new MusicBot(client, {
    ytApiKey: config.ytoken,
    prefix: config.prefix,
    language: 'es'
  });
