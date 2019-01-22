const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("TOKEN GOES HERE")
const prefix = "!";

bot.on('ready', () => {
     
    bot.user.setActivity("with you!");
    bot.user.setStatus("dnd");
    
});

bot.on("message", async message => {
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.author.bot) return;
    const command = args.shift().toLowerCase();
    const sender = message.author;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;
  
    if(command === "foo") {
    
       message.channel.send("Bar!");
    
      return;
    }
  
    if(command === "embed") {
    
      const embed = new Discord.RichEmbed()
      .setTitle("Embed")
      .setColor("RANDOM")
      .addField("Field Title", "Field description.")
      
      message.channel.send(embed);
    
      return;
    }
  
});
