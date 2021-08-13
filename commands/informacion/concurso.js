const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle(" Concurso ")
        .setDescription("Se hara un concurso porque esta semana todo los dias se hara un post en el foro y quien haga mas fotos/pocas pero buena calidad ganara un premio que es: \n - Dinero ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "concurso" 
};