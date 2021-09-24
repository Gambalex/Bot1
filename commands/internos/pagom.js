const Discord = require("discord.js");const generator = require('generate-password');const errores = require("./error/error.js");

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;
    let argumentos = message.content.split(",,");

    let CantidadAP = argumentos[0].replace(prefix+"pagom",'');let Beneficiario = argumentos[1];
    let Ncuenta = argumentos[2];let codigo = generator.generate({length: 8, numbers: true});

    if(!CantidadAP ||  !Beneficiario || !Ncuenta){let tipo = 3;errores.run(bot, message, tipo);return null};
    if(Ncuenta === "NaN"){let tipo = 4;errores.run(bot, message, tipo);return null};

    let embed = new Discord.MessageEmbed()
        .setTitle("PAGO")
        .setColor(0xFF0000)
        .setThumbnail("https://files.lu-rp.ovh/static/assets/images/ordenadores/mazebank.png")
        .addField("Código de pedido", codigo)
        .addField("Cantidad a pagar", "$ "+CantidadAP)
        .addField("Número de cuenta", Ncuenta)
        .addField("Beneficiario", Beneficiario)
        .addField("Estado", "**Pendiente de pago**")
  
  	   .setFooter('LSMA® DATA CENTER ', 'https://imgur.com/bKH6ZP8.png');
    message.channel.send({embed}).then(m => m.react("💶"));

};


module.exports.help = {
    name: "pagom"
};