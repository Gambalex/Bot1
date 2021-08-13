const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Precios LSMA®")
        .setDescription("Estos son los precios para eventos: \n \n - **UVI:** $10000 / hora \n \n - **VIR:** $14000 / hora \n \n - **Hospital de Campaña:** $10000 / hora \n \n  - **Unidad Aerea:** $20000 / hora \n \n - **Paramedico que asista:** $5000 / hora  \n \n - Se debera pedir los servicios 72 horas con antipacion.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "precios"
};