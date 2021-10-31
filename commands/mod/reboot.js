module.exports = (client, message, config) => {
    let mod = message.author
    if (mod.id == config.owner[1] || mod.id == config.wife[1]) return

    message.channel.send("Reiniciando.. por favor espere 10s antes de usar un comando de música")
    .then(() => client.destroy())
    .then(() => client.login(process.env.TOKEN))
    console.log(`Bot rebooted by ${message.author.id}`)
}
