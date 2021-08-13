const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("<:LSMA1:737950954674061323> Changelog <:LSMA1:737950954674061323> ")
        .setDescription("**Los Santos Medical Assistance - Direccion** \n \n - Se ha cambiado el nombre del programa ''Ride Along'' a ''Medical Along'' \n -Se han realizado cambios internos en Cupula")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "cl" 
};