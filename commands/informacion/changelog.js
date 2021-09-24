const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("<:LSMA1:737950954674061323> Changelog <:LSMA1:737950954674061323> ")
        .setDescription("\n - Se realizan cambios internos en el discord, mas que nada para organizacion y otras de estetica en este.")
        .setColor(0x037FDA) 
  	    .setFooter('Los Santos Medical Assistance - Direccion' , 'https://imgur.com/20tV03p.png');
    message.channel.send({embed});

};


module.exports.help = {
    name: "cl" 
};

//https://imgur.com/20tV03p