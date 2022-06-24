const Discord = require("discord.js")
const axios = require("axios")
module.exports = {
    name: 'pic',
    aliases: [],
    category: 'media',
    utilisation: 'pic',
    desc: "Sends a post from cat-based subreddits, I am not responsible for the listed content!",
execute(bot, messageCreate, args) {

    if(args[0] === "-h"){
		return messageCreate.channel.send(this.utilisation)
	}        
    let reddit = [
    "Catloaf", "tuckedinkitties", "Blep", "cats", "CatPics", "kitten", "BlepLoaf", "Cats"]
    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
	  const options = {
		  method: "GET",
		  url: `https://reddit.com/r/${subreddit}/random/.json`,
	  };
try{
	  axios.request(options).then(response => {

        let meme = response.data[0].data.children[0].data;
		  let memeEmbed = new Discord.MessageEmbed()

		  memeEmbed.setTitle(meme.title)
		  memeEmbed.setURL(`https://reddit.com${meme.permalink}`)
		  memeEmbed.setImage(meme.url)
		  memeEmbed.setColor("DARK_AQUA")
		  memeEmbed.setFooter({text:`👍 ${meme.ups} | 💬 ${meme.num_comments}`});


		messageCreate.channel.send({ embeds: [memeEmbed] })
    })
  }catch(e) {
          messageCreate.channel.send("Oops looks like something happened! Please try again later!")
          return
      };
}}