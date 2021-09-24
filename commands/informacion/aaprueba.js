const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("NORTMATIVA APP")
        .setDescription("Me pican los cojones \n Parrafo 2")
        .setColor(0x00FF00) 
 //       .setImage ("")
        .setThumbnail('https://imgur.com/EZmmrYg.png');
    message.channel.send({embed}).then(m => m.react("📩")).catch();

};


module.exports.help = {
    name: "it" 
};