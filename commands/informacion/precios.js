const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Precios LSMA®")
        .setDescription("Estos son los precios para eventos: \n \n - **UVI:** $15,000 / hora \n \n - **VIR:** $15,000 / hora \n \n - **Hospital de Campaña:** $15,000 / hora o Gratis* \n \n  - **Unidad Aerea:** $35,000 / hora \n \n - **Paramedico que asista:** $15,000 / hora  \n \n - *El hospital de campaña sera instalado gratuitamente si solicitas 2 o mas unidades. \n\n - Se debera pedir los servicios 72 horas con antipacion.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "precios"
};