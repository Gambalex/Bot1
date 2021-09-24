const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("<:LSMA2:737950640222765107>  Noticia URGENTE")
        .setDescription("Hola, a partir de este momento las multas de los radares van a cambiar un poco... \n\n Ahora los radares se cobraran doble, si doble, ya que las multas ahora llegan a la empresa, por lo tanto se creara un canal sera este <#877230489956667422>, en el cual se tiene que colocar la platilla correspondiente indicando que nos salto un radar, en caso de no reportarlo se investigara quien conducia y se le cobrara el triple, ademas aquel que se sorprenda conduciendo una unidad sin fichar antes se le cobrara los radares que no tengan justificacion mas una multa de $10,000, con la finalidad que sean responsables tanto de la conduccion de los vehiculos como de sus actos si ya eres recurrente se puede aumentar estas multas internas ademas de conllevar una sancion hasta la expulsion.") 
        .setColor(0x037FDA) 
  	    .setFooter('LSMA® DATA CENTER ', 'https://imgur.com/bKH6ZP8.png');
    message.channel.send({embed})

};


module.exports.help = {
    name: "noticia4" 
};