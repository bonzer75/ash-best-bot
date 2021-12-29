const date = Date();

module.exports = (client, message) => { 

    const config = require("../config.json");

    if(!message.content.startsWith(config.prefix)) return; 
    if(message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()
  
    let cmd = client.commands.get(command);
    if(!cmd) return;
    
    cmd(client, message, args, config);

    if(message.content.startsWith(`#play`)) {
        message.reply("hola, puedes mirar mis comandos con **sudo help**, recuerda que **sudo ** es mi prefijo pendejo")
     }

    if(message.content.startsWith(config.prefix)) {
        console.log(`El usuario ${message.author.tag} ha usado el comando ${message} | ${date}`)
    }
    //código para crazy

    let crazy = client.users.cache.get("864139441521295381")
    setInterval(function() {
        let fecha = new Date()
  
        if(fecha.getHours() == 14 && fecha.getMinutes() == 10 && fecha.getSeconds() == 10) {
            crazy.send("Señorita Crazy Castillo, recuerda tomar tus pastillas (no desapareceré)")
        }
    }, 1000)
  }