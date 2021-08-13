const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Aceptados de Recursos Humanos")
        .setDescription (" - Arturo Fernadez \n - David Jordan \n - Ethan Weller \n - Marc Pinto \n - Irvin Davenport")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "academiahuma"
};