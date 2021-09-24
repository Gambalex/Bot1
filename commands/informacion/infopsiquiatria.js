const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()
        .setTitle("Información Departamento de Salud Mental")
        .setDescription("En LSMA hemos creado un nuevo servicio para adaptarse a los requerimientos de la ciudadanía, nuevo Departamento de Salud Mental: \n \n Podrás obtener ayuda con problemas sociales, rupturas amorosas, trastorno de estres postraumatico (TEPT), fobias y miedos... \n \n Tarifas: \n \n **1. Consulta básica → $1,000** \n \n **2. Terapia → $2,600 ** \n \n **3. Terapia grupal → $3,000 (p/p) ** \n \n**4. Taller de prevención → $10,000** \n \n **5. Examen psicotécnico → $10,000** \n \n **6. Renovación psicotécnico → $3,000** \n \n (Tarifas de consulta por cada 15 minutos.) \n \n *En caso de no asistir a la hora indicada para realizar un psicotécnico, se tendrá que pagar un suplemento por hora personalizada de $5,000.")
        .setImage('https://i.imgur.com/JqwkIRt.png')
        .setColor(0x037FDA)
      	.setFooter('LSMA® DATA CENTER ', 'https://imgur.com/bKH6ZP8.png');
    message.channel.send({embed});

};


module.exports.help = {
    name: "saludm"
};