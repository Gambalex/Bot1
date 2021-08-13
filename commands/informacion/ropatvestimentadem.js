const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Pantalon de Trabajo")
        .setDescription("**Masculino Departamento Emergencias:** 4 101 0 \n **Masculino Departamento Medico:** 4 101 1 \n **Femenino Departamento Emergencias:** 4 105 0 \n **Femenino Departamento Medico:** 4 105 1") 
        .setImage()
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "pantalones" 
};