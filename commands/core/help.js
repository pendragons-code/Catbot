const Discord = require("discord.js")
module.exports = {
    name: 'help',
    aliases: ["commands"],
    category: 'core',
    utilisation: `help<category>\nhelp <command name>\nhelp <all>`,
    desc: "Fetches list of commands, how to use the commands and specify their functions!",
execute(bot, messageCreate, args) {
    if(args[0] === "-h"){
      messageCreate.channel.send(this.utilisation)
  }
  if(!args[0]){
  const embed = new Discord.MessageEmbed();
  embed.setColor('DARK_AQUA');
  const commands = bot.commands.filter(x => x.showHelp !== false);
  embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(', '));
  embed.setTimestamp();
  embed.setDescription("How to read: `command_name(alias)`!")
  embed.setFooter({text:'Adding a -h behind as an argument will send you the utilization.', iconURL:messageCreate.author.avatarURL({ dynamic: true })});
  messageCreate.channel.send({ embeds: [embed] });}
else {
    const command = messageCreate.bot.commands.get(args.join(" ").toLowerCase()) || messageCreate.bot.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));
  if (!command) return messageCreate.channel.send(`I did not find this command !`);
  let embed2 = new Discord.MessageEmbed
    embed2.setTitle("Help Center!")
    embed2.setColor("DARK_AQUA")
    embed2.setFooter({text:"Pls suggest features if you can!"})
    embed2.addFields(
        { name: 'Name', value: command.name, inline: true },
        { name: 'Category', value: command.category, inline: true },
        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', prefix), inline: true }, { name: 'Description',  value: command.desc.replace('{prefix}', prefix), inline: true },
    )
    embed2.setTimestamp()
    embed2.setDescription( 'Have fun!')
  messageCreate.channel.send({embeds: [embed2]});
    }
  }
}
