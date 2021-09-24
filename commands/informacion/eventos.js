const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("(Permanente) Eclipse Lounge- Nº servicio: 0001 Todos los LUNES") 
        .setDescription("**Ubicación:**Eclipse Lounge \n **Hora del evento:** 23:00 (Hora peninsular española) \n **Hora de preparacion:** 21:45  \n **Duracion del evento:** 1:30 hrs\n \n **Ubicacion:** Vienwood Hills \n \n **Unidades solicitadas:** 1 UVI y 2 Paramedicos")
        .setColor(0x38BFB9) 
        .setImage('https://imgur.com/oX1yHNh.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "evento" 
};