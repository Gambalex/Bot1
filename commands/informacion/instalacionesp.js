const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Mensaje Nuevo | LSMA DATA CENTER ")
        .setDescription("El primero que me pase una foto de Kenshin")
        .setColor(0x037FDA) 
 //       .setImage ("")
    message.channel.send({embed});

};


module.exports.help = {
    name: "instalacionesp" 
};