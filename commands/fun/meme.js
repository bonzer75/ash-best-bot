const reddit = require('reddit-fetch')
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = async(client, message) => {
    message.channel.startTyping();

    let i = ['Spanishmeme', 'memeshumedos', 'MemesEnEspanol', 'memexico', 'MemesESP', 'BeelcitosMemes', 'Retheys']
	let meme = i[Math.floor(Math.random() * i.length)]

    await reddit({
        subreddit: `${meme}`,
        sort: 'hot',
        allowNSFW: false,
        allowModPost: false,
        allowCrossPost: false,
        allowVideo: false
    }).then(post => {
    const embed = new Discord.MessageEmbed()
        .setColor(0xe51a4c)
        .setTitle(post.title)
        .setImage(post.url)
    message.channel.send(embed)
    message.channel.stopTyping();
    }).catch(function(err) {
        console.log(err)
    })
}