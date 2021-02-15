const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("TOKEN GOES HERE") // connects to discord

const prefix = "!"; // prefix for the bot to listen for so it can run commands

bot.on('ready', () => {
     
    bot.user.setActivity("with you!"); // changes playing status to "playing with you!"
    bot.user.setStatus("dnd"); // changes status to "do not disturb"
    
});

bot.on("message", async message => {
  
    const args = message.content.slice(prefix.length).split(/ +/g);
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
      .setColor("RANDOM") // Sets the embed color randomly.
      .addField("Field Title", "Field description.")
      
      message.channel.send(embed);
    
      return;
    }
  
});
