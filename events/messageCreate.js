module.exports = async (bot, messageCreate)  => {
    const config = require("../config.json")
            if(messageCreate.author.bot || !messageCreate.guild.id) return;
            let prefix = messageCreate.content.includes(config.prefix) ? config.prefix : "<@963472190311915570>"
            if (messageCreate.content.indexOf(prefix) !== 0 ) return
            console.log(messageCreate.guild.id)
            const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
            if(!cmd)return
            if(cmd){
            cmd.execute(bot, messageCreate, args)
          return  console.log(`${messageCreate.author.username} ran ${cmd.name} or ${cmd.aliases} in ${messageCreate.channel.name}, from ${messageCreate.guild}`)
  }
}
