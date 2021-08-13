const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Division Aerea | Los Santos Medical Assistance")
        .setDescription("-Se deberá informar cada vez que se inicie y termine un vuelo en el helicóptero en <#841272204464881674> \n - Se podrá salir a apoyar a los compañeros vía aérea siempre y cuando estén 3 o más en unidades UVI o VIR \n - Se deberá pedir permiso al rango más alto en ese momento para iniciar vuelo \n - Se tendrá que repostar el helicóptero cada vez que se utiliza")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "normativada" 
};