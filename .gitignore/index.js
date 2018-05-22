const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Exolia | -aide");
console.log("Lancement ! ");
});

bot.login('NDIyMzU4NDI0MDgxMjY4NzQ2.DeTqCQ.tD_MgmjHOfkXiH36r_5Ga5dFa-o');

bot.on('message',function (message) {
if (message.content === '-aide') {
    message.reply ('La listes des commandes vous à été envoyé en privée.')
 } 
} )
