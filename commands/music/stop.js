module.exports = (client, message) => { 
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('Jaja no');

    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return
    }

    message.react('👍');
    client.musicBot.onMessage(message).catch(err => console.log(err));
  }