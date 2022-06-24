const Discord = require("discord.js")
const env = require("dotenv").config()
const tenkey = process.env.tenorkey
module.exports = {
    name: "gif",
    aliases: [],
    category: 'media',
    utilisation: 'pic',
    desc: "Sends a gif from tenor!",
 async execute(bot, messageCreate, args){
    const fetch = require("node-fetch")
    let urls = [`https://g.tenor.com/v1/search?q=cat%20cute&key=${tenkey}&limit=10`, `https://g.tenor.com/v1/search?q=cat%20cute&key=${tenkey}&limit=10`, `https://g.tenor.com/v1/search?q=cat&key=${tenkey}&limit=10`, `https://g.tenor.com/v1/search?q=kitten%20cute&key=${tenkey}&limit=10`]
    let resser = urls[Math.floor(Math.random() * urls.length)];
    const res = await fetch(resser)
try{
    const data = await res.json()
    let rate = Math.floor(Math.random() * 11);
    let embed = new Discord.MessageEmbed()
    embed.setTitle("MEOW!")
    embed.setColor("DARK_AQUA")
    embed.setFooter({text: "Meow! Documentation out soon!"})
    embed.setImage(data.results[rate].media[0].mediumgif.url)
    embed.setURL(data.results[rate].media[0].mediumgif.url)
    embed.setTimestamp()
    messageCreate.channel.send({embeds: [embed]})
}catch(e){
console.log(e)
return messageCreate.channel.send("An error occured, please try again later!")
}
    }
}
