const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de disponibilidad")
          .setDescription("Subdirector General LSMA® Moussa Badulaki. \n ¡Disponible actualmente! \n \n Correo électronico habilitado: moussabadulaki@lsma.es")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "moussa"
};