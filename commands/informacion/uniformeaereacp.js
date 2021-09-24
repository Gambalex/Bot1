const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme de Division Aerea - Co Piloto")
        .setDescription("Utilizaremos este uniforme cuando montemos alguna aeronave, todo se pide por /ropat  exepto el casco \n **Torsos:** 3 12 0 \n **Tops:** 11 228 5 \n **Accesorios:** 7 0 0 \n **Camisas:** 8 15 0 \n **Miscelanea:** Nada (0) \n **Pantalones:** 4 92 5 \n **Calzado:** 6 25 0  \n **Casco:** /propt poner 0 19 0 ID\n **") 
        .setImage('https://i.imgur.com/Qt1JT50.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "uniformeaereacp" 
};