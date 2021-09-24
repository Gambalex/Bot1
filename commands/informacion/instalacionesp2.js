const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Puertas de Oficina Publica")
        .setColor(0x037FDA) 
        .setImage('https://i.imgur.com/MzPtBKg.png')
   	    .setFooter('LSMA® Direccion ', 'https://imgur.com/bKH6ZP8.png');
//https://imgur.com/iSNuE3z
    message.channel.send({embed});

};

module.exports.help = {
    name: "instalacionesp2" 
};