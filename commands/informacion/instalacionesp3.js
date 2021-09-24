const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Mapa de Torre LSMA")
        .setColor(0x037FDA) 
        .setImage('https://imgur.com/YZJTt7R.png')
   	    .setFooter('LSMA® Direccion ', 'https://imgur.com/bKH6ZP8.png');
//https://imgur.com/iSNuE3z
    message.channel.send({embed});

};

module.exports.help = {
    name: "instalacionesp3" 
};