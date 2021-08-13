const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de disponibilidad")
          .setDescription("Director Medico LSMA® Arturo Fernandez \n ¡No disponible actualmente! \n \n Correo électronico deshabilitado: arturofernandez@lsma.es")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "arturo"
};