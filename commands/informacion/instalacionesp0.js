const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Torre LSMA")
        .setColor(0x037FDA) 
        .setImage('https://imgur.com/v2Yuf5E.png')
   	    .setFooter('LSMA® Direccion ', 'https://imgur.com/bKH6ZP8.png');
//https://imgur.com/iSNuE3z
    message.channel.send({embed});

};


module.exports.help = {
    name: "instalacionesp0" 
};