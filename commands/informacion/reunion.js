const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Reunion - Cupula")
        .setDescription("Habra reunion de toda la cupula el 11 de mayo a las 20:00hrs es OBLIGATORIA")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "reunion" 
};