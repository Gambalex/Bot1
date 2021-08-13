const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Accesorios Masculinos")
         .setDescription("**Los /ropat son los accesorios los cuales se tendran que pedir por un /reportar** \n **Tarjeta de identificacion:** 7 127 0 \n **Estetoscopio:** 7 126 0 \n **Cinturon Tactico Becario:** 8 153 0 \n **Cinturon Tactico** 8 129 0 \n **Logo Paramedico** 10 58 0") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "ropatm" 
};