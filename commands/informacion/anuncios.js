const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Plantilla anuncios")
        .setDescription("\n **/an ~b~ LSMA | ~w~ Unete a la empresa líder en el sector de las emergencias sanitarias. ¿A qué esperas?  ~b~ unete a la APP. **\n\n **/an ~b~ [LSMA]~w~ Contrata ya nuestros servicios de asistencia sanitaria para tus eventos. ¿A qué estás esperando? ~b~ Visita nuestra APP.**") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "anunciosm" 
};