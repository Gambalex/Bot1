const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Vacantes Abiertas")
        .setDescription("Unete a la empresa médica más avanzada de Los Santos, ¡Te estamos esperando!")
        .setImage('https://i.imgur.com/rob2atz.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "vd" 
};