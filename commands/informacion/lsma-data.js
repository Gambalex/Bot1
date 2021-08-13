const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("LSMA DATA")
        .setDescription(" [**PARTE DE ACCIDENTE**⌡ Rellena este documento en accidente o  rotura de la ambulancia. https://docs.google.com/forms/d/13pybgotV2CbtEGhvBWjrV9wmBqbdA5QrmvF82DlASV4/edit \n \n ⌠**TRASLADO SANITARIO NO URGENTE**⌡ Rellena este documento en caso de no llevar a un paciente al hospital. https://docs.google.com/forms/d/1CK0aN09ifM-jZh9tW5Au3_9RvxY2USYc8uOUml2B0BQ/edit \n \n  [**PARTE DE ROBO**⌡ Rellena este documento en caso de robo del vehiculo o material. https://docs.google.com/forms/d/1Zdme8axeRBi49LWGi4e9O84dtFI_iEEiSVdMP3WxRXU/edit")
        .setImage('https://i.imgur.com/8k7Jdgp.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "lsmadata" 
};