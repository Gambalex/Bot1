const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Reunión a las 19:00 (HPE)")
        .setDescription("Mañana se trataran puntos que son muy importantes para el progreso de la divisones de la empresa, no te la pierdas. Asistencia obligatoria en TS3") 
        .setColor(0x0C1F5) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "noticia4" 
};