const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de disponibilidad")
          .setDescription("Director General LSMA® Douglas Gibson. \n ¡Disponible actualmente! \n \n Correo électronico habilitado: douglasgibson@lsma.es (Peticiones formales)")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "douglas1"
};