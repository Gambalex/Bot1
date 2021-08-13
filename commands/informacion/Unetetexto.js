const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
  // Colores: https://htmlcolorcodes.com/es/
       /*
      // EMERGENCIAS
      
  
      let embed = new Discord.MessageEmbed()
        .setTitle("Departamento de Salud Mental")
        .setColor(0x037FDA)
        .setImage("")
        .setDescription("¡Habla con nuestra experto de la unidad del Departamento de Salud Mental! \n (Tiempo estimado de espera: De 2-10 minutos.)")
        .setFooter('LSMA® DATA CENTER', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png')
    message.channel.send({embed}).then(m => m.react("📩")).catch();
};


module.exports.help = {
    name: "Tinfo"
};
    let embed = new Discord.MessageEmbed()
        .setTitle("Asistencia de Emergencias 24H.")
        .setColor(0x037FDA)
        .setDescription("¿Necesitas solicitar nuestra asistencia? Pulsa aquí📩 \n (Tiempo estimado de espera: De 2-5 minutos.)")
        .setFooter('LSMA® DATA CENTER', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png')
    message.channel.send({embed}).then(m => m.react("📩")).catch();
     
    */

  /*
    Plantilla completa EMBED:
    
    	.setColor('#0099ff')
	    .setTitle('Some title')
	    .setURL('https://drive.google.com/file/d/1N5QRBRTz2JwECP4bmWaYuqLBy_AzF-4Z/view?usp=sharing')
	    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	    .setDescription('Some description here')
	    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	    .addFields(
		    { name: 'Regular field title', value: 'Some value here' },
		    { name: '\u200B', value: '\u200B' },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .addField('Inline field title', 'Some value here', true)
	  .setImage('https://i.imgur.com/6acg7sv.png')
	  .setTimestamp()
	  .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
  */
  
  
    let embed = new Discord.MessageEmbed()
        //.setAuthor('LSMA', 'https://i.imgur.com/LJClyPX.png', 'https://www.lu-rp.es/foro/thread-10448.html')
        .setTitle("¡Bienvenido a LSMA® application!")
        .setDescription("Empresa médica dedicada a emergencias sanitarias, traslados no urgentes, farmacología y psiquiatría. ¡También en el Hospital de Pillbox!")
        .setColor(0x037FDA)
        .addField("Menú de navegación", "¡Accede directamente desde aquí al apartado que desees!")
    
        .addField("Nuestra empresa", "<#737592540877946970>" , true)
        .addField("Unete a nosotros", "<#737736774218154094>" , true)
        .addField("Farmacia", "<#737591727962980352>" , true)
    
        .addField("Contacto Emergencias", "<#737590914402353224>" , true)
        .addField("Salud Mental", "<#749870390012280833>" , true)
        .addField("Ubicación", "<#737730544623812660>" , true)
    
  	    .setFooter('LSMA® DATA CENTER ', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png');
    message.channel.send({embed});

  
  // `Puedo meter variables dentro ${message}`, 'Solo texto' , "Solo texto"
};


module.exports.help = {
    name: "unetetexto" // Comando que tienes que poner en discord 
};