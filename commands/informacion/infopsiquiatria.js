const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()
        .setTitle("Información Departamento de Salud Mental")
        .setDescription("En LSMA hemos creado un nuevo servicio para adaptarse a los requerimientos de la ciudadanía, nuevo Departamento de Salud Mental: \n \n Podrás obtener ayuda con problemas sociales, rupturas amorosas, trastorno de estres postraumatico (TEPT), fobias y miedos... \n \n Tarifas: \n \n **1. Consulta básica → 1000$** \n \n **2. Terapia → 2600$ ** \n \n **3. Terapia grupal → 3000$ (p/p) ** \n \n**4. Taller de prevención → 10000$** \n \n **5. Examen psicotécnico → 10000 $** \n \n **6. Renovación psicotécnico → 3000$** \n \n (Tarifas de consulta por cada 15 minutos.) \n \n *En caso de no asistir a la hora indicada para realizar un psicotécnico, se tendrá que pagar un suplemento por hora personalizada de 5000$.")
        .setImage('https://i.imgur.com/JqwkIRt.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "saludm"
};