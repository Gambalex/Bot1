const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Mensaje Nuevo | Douglas Gibson")
        .setDescription("Hola, buenas sera un gusto contar con ustedes como empresa colaboradora, un saludo cordial 😀")
        .setColor(0x00FF00) 
 //       .setImage ("")
    message.channel.send({embed}).then(m => m.react("✅")).catch();

};


module.exports.help = {
    name: "rb" 
};