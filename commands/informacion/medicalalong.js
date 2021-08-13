const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Medical Along")
        .setDescription ("**Los Santos Medical Assistance - Programas** \n \n **Requisitos** \n - 20 años de edad \n - Nacionalidad en el Estado de San Andreas \n - No poseer antedecentes penales graves \n - Acudir con vestimenta comoda y limpia \n - No haber consumido cualquier tipo de estupefaciente \n \n **Plantilla:** \n \n `Nombre: \n Apellidos: \n Edad: \n Telefono: \n Nacionalidad: \n Discapacidad o transtornos: \n Antecedentes: \n Horario preferente: \n Anotacion extra:`")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "malong"
};