const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Terminos y Condiciones - Empresa colaboradora")
        .setDescription(" **La empresa colaboradora** \n \n 1.1 -Tiene por obligacion colocar en todos sus eventos la publicidad, logos o imagenes en sus posters, flyer o cualquier medio grafico. \n\n 1.2 - Tiene como obligacion comunicar por el canal pertinente todos los datos para el siguiente evento, ademas de elegir preferentemente a LSMA, en caso de que LSMA no pueda asistir, se podra contratar a otra empresa \n\n 1.3 - La empresa se compromete a brindar un espacio, para poder brindar uan buena atencion, asi como dar acceso total al recinto \n\n **Los Santos Medical Assistance** \n\n 2.1 - Tenemos la obligacion de atender a todos los heridos y/o personas que lo requieran dentro del perimetro o lugar del recinto. \n \n 2.2 - Se ofrece de manera permanente un descuento del 20% en todos los vehiculos (esta no influye sobre el precio de las personas que asisitan) \n \n 2.3 - Nos hacemos responsables de toda atencion medica realizada en la zona a menos que otra empresa, organizacion o terceros intervengan en la zona. \n \n **Terminos Extra** \n\n 3.1 - Al momento que la empresa colaboradora solicita y nosotros confirmamos la asistencia, una vez en el evento si asisten mas se pagara solo el 50% del valor por lo extra ")
        .setColor(0x00FF00) 
 //       .setImage ("")
    message.channel.send({embed}).then(m => m.react("✅")).catch();

};


module.exports.help = {
    name: "tyc" 
};