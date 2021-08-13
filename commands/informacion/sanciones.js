const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Sanciones | Los Santos Medical Assistance")
        .setDescription("https://docs.google.com/document/d/1WVBqgU-GRvauungVxSQndXaS8KMAnBDwPhprR1CnhDo/edit?usp=sharing \n \n Esta es el sistema de sanciones de la empresa.")
    message.channel.send({embed});

};


module.exports.help = {
    name: "sanciones" 
};