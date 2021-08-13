const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Interna | Actualizacion")
        .setDescription("Hoy 31/03/2021 se ha actualizado la normativa,se recomienda leer de nuevo la normativa.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "ac2" 
};