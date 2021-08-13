const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Actualizacion 24/03/2021")
        .setDescription("-Nuevos rangos en la rama de paramedicina,ahora son: \n -Becario \ -Auxiliar de paramedico \n -Paramedico \ -Paramedico supervisor \n -Coordinador de emergencias \n -Director de urgencias \n -Nueva cupula \n -La VIR se utiliza a partir de rango paramedico supervisor \n -Marc Pinto ahora es  coordinador de eventos \n -Ignacio Rueda ahora es coodinador de eventos \n -Organizado los roles en discord \n-Nueva academia \n-Nuevas postulaciones a divisiones \n -Contraseña cambiada en los canales de ts3,ahora es: LSMA \n ")
    message.channel.send({embed});

};


module.exports.help = {
    name: "noticia3" 
};