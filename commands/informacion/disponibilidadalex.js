const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de disponibilidad")
          .setDescription("Director de Urgencias LSMA® Alberto Martinez \n ¡Disponible actualmente! \n \n Correo électronico habilitado: albertomartinez@lsma.es")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "alex"
};