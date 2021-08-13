const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme de Verano Departamento Medico")
        .setDescription("Utilizaremos este uniforme la mayoria de veces a exepcciones dichas por la directiva. \n **Torsos:** Torso 0 (0) \n **Tops:** Camisa de botones manga corta (250) [Color: 1] \n **Accesorios:** Nada (0) \n **Camisas:** Sin camisa (15) \n **Miscelanea:** Nada (0) \n **Pantalones:** Pantalones de Trabajo (101) [Color: 0] \n **Calzado:** Botas de motero (25) [Color: 1]  \n \n **La mayoria de cosas se compra en la tienda Binco al lado del autolavado y el calzado en la Binco de Mission Row** \n Se deberia ser algo asi: ") 
        .setImage('https://i.imgur.com/C5dw3we.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "uniformevdm" 
};