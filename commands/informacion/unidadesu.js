const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
    let embed = new Discord.MessageEmbed()
        .setColor(0x00F221)
        .setImage(" https://cdn.discordapp.com/attachments/797930964549894145/833825610459381801/uvi.png")
    message.channel.send({embed});

};


module.exports.help = {
    name: "unidadesu" 
};