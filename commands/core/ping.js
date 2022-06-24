module.exports = {
    name: 'ping',
    aliases: [],
    category: 'core',
    utilisation: `ping`,
    desc: "Shows latency between you and the bot!",

    execute(client, messageCreate,args) {
if(args[0] === "-h"){
    messageCreate.channel.send(this.utilisation)
}
        messageCreate.channel.send(`- Ping : **${client.ws.ping}ms** !`);
    
    },
};