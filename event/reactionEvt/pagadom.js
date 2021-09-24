/* Librerias */
const Discord = require("discord.js");
var embed;


module.exports.run = async (bot, messageReaction, user) => {
  
    messageReaction.message.channel.messages.fetch(messageReaction.message.id).then(m => {
     
    if(m.embeds[0].fields[4].value === "**Pendiente de pago**")
    {
     embed = new Discord.MessageEmbed()
       .setColor(0x00FF00)
       .setTitle(m.embeds[0].title)
       .setThumbnail("https://files.lu-rp.ovh/static/assets/images/ordenadores/mazebank.png")
       .addField(m.embeds[0].fields[0].name, m.embeds[0].fields[0].value)
       .addField(m.embeds[0].fields[1].name, m.embeds[0].fields[1].value)
       .addField(m.embeds[0].fields[2].name, m.embeds[0].fields[2].value)
       .addField(m.embeds[0].fields[3].name, m.embeds[0].fields[3].value)  
       .addField(m.embeds[0].fields[4].name, "**Pagado**")
  
  	   .setFooter('LSMA® DATA CENTER ', 'https://imgur.com/bKH6ZP8.png');      
     m.edit(embed).catch(); 
    } 
    else{return null;};

  });  
  
};