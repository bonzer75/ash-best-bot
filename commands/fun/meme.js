const reddit = require('reddit-fetch')

module.exports = (client, message) => {
    let i = ['Spanishmeme', 'memeshumedos', 'MemesEnEspanol', 'memexico', 'MemesESP', 'animemes', 'MinecraftMemes']
	let meme = i[Math.floor(Math.random() * i.length)]

    reddit({
        subreddit: `${meme}`,
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