module.exports = (client, message, args) => { 
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('Jaja no');

    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return
    }

    let cancion = args.join(' ')
     if(!cancion) {
      return
     }

    message.reply("Ya")
    client.musicBot.onMessage(message).catch(err => console.log(err));
  }