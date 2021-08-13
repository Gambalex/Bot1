const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Documento Psicotécnico")
        .setDescription("¡Pulsa en el titulo para ir hacia la plantilla! Recuerda sacarlo en formato pdf pulsando: Archivo > Descargar. No te olvides de tu firma.")
        .setURL('https://drive.google.com/file/d/1N5QRBRTz2JwECP4bmWaYuqLBy_AzF-4Z/view?usp=sharing')
        .setColor(0x037FDA)   

    message.channel.send({embed});

};


module.exports.help = {
    name: "psicologia2"
};