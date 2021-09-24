const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("<:LSMA2:737950640222765107> Anuncio de ultima hora")
        .setDescription("Hola, buenas vamos al grano, este es un momento muy esperado por varios, ya que abren las oposiciones a las Divisiones y/o Departamentos, recuerden que solo pueden escoger un Departamento y una División los únicos 2 Departamentos son el de Emergencias y el Médico, los demás son Divisiones o Sub Departamentos que entran en la misma categoría, tienen hasta el 20/08/2021 para enviar su solicitud, y se dará el resultado hasta dentro de 72 horas después del cierre de las Oposiciones. ")
        .setColor(0x037FDA) 
        .setURL('https://forms.gle/PFLMPRnNCmBp2uBq9')
   	    .setFooter('LSMA® Direccion ', 'https://imgur.com/bKH6ZP8.png')
        .setImage('https://imgur.com/EZmmrYg.png');

    message.channel.send({embed});

};


module.exports.help = {
    name: "oposabiertas" 
};