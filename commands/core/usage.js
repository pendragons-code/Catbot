const os = require("os-utils")
const Discord = require("discord.js")
module.exports = {
    name: 'usage',
    aliases: ["-u", "--fetch"],
    category: 'core',
    utilisation: `version`,
    desc: "Shows you current usage details of the bot!",
execute(bot, messageCreate, args) {
    if(args[0] === "-h"){
      return messageCreate.channel.send(this.utilisation)
  }
  os.cpuUsage(function(v){
let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
let memory = `Approximate memory usage: ${Math.round(used * 100) / 100} MB`
    let title = " Jasbot's Usage!"
    let Desc = `CPU Usage : ${Math.round(v * 100) / 100}%\n${memory}\n Uptime: ${uptime}`
    let embed = new Discord.MessageEmbed()
    embed.setTitle(title)
    embed.setDescription(Desc)
    embed.setColor("ORANGE")
    embed.setTimestamp()
    embed.setFooter({text:"Thanks for using this bot!"})
    messageCreate.channel.send({embeds: [embed]})
    })
}}