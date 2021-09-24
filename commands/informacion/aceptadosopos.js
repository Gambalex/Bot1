const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle('**Aceptados Sub Departamentos y Divisiones**')
        .setDescription("\n **Division Aerea**\n Matias Lamote \n Maverick Richardson \n Randall Lurie \n \n **Departamento de Farmaceutica** \n Matias Lamote \n Lucas Gutierrez \n\n **Atte Direccion Los Santos Medical Assistance**") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "aceptadosopos" 
};

