const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle(" Bienvenido")
        .setDescription("El bot te dice bievenido a la empresa LSMA®")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "bienvenido" 
};