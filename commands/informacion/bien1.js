const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Mensaje Nuevo | LSMA DATA CENTER ")
        .setDescription("Hola buenas, para informarle de que los precios subieron, igualmente al ser colaboradores, se les dara un descuento especial, saludos desde Cupula.")
        .setColor(0x00FF00) 
 //       .setImage ("")
    message.channel.send({embed});

};


module.exports.help = {
    name: "rb1" 
};