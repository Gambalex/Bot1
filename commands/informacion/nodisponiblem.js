const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de disponibilidad")
        .setDescription("Subirector General LSMA® Marc Pinto \n \n No disponible actualmente.") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "nodisponiblem" 
};