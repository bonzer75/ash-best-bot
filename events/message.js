module.exports = (client, message) => { 

    if(!message.content.startsWith(client.config.prefix)) return; 
    if(message.author.bot) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()
  
    let cmd = client.commands.get(command);
    if(!cmd) return;

    const config = require("../config.json");
    
    cmd(client, message, args, config);

    if(message.content.startsWith(`#play`)) {
        message.reply("hola, puedes mirar mis comandos con **sudo help**, recuerda que **sudo ** es mi prefijo pendejo")
     }
  }