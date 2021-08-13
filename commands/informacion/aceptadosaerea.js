const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Aceptados a Departamentos y Divisiones")
        .setDescription ("**Departamento Medico** \n Antonio Vega \n \n **Departamento Salud Mental** \n Antonio Bujalance \n \n **Division Aerea** \n Valentin Gonzales \n Octavio Pando \n Victor Robles \n Iker Cortes \n Ignacio Mendivil \n \n **Division de Farmaceutica** \n Antonio Vega \n Massimo Alessandro \n \n **Medical Along** \n Octavio Pando \n Antonio Bujalance \n \n **Division de Recursos Humanos** \n Valentin Gonzales \n\n **Atte Direccion Los Santos Medical Assistance** ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "acepta2" 
};