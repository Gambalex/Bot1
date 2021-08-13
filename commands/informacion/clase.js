const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Reunión a las 19:00 (HPE)")
        .setDescription("Se convoca una formación extraordinaria el 02/05/2021 a las 19:00 si constatamos que poca gente asiste, se buscará un horario mejor o se convocará otra, otro dia") 
        .setColor(0x0C1F5) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "clase" 
};