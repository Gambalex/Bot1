const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Plantilla anuncios")
        .setDescription("\n **/an ~b~ LSMA | ~w~ ¿Buscas una empresa con experiencia en el sector sanitario? ¿Que esperas?  ~b~ únete a la APP.**\n\n **/an ~b~ [LSMA]~w~ Contrata ya nuestro servicio de asistencia para eventos, completamente mejorado ~b~ Visita nuestra APP.**") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "anuncios2" 
};