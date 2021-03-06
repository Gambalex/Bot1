const Discord = require("discord.js");

module.exports = (bot, messageReaction, user) => {

    try {
        if(user.id === bot.user.id){return null;};
        var emojiname = messageReaction._emoji.name;
        var emojiid =  messageReaction._emoji.id;
        var server = messageReaction.message.guild;
        var member = messageReaction.message.guild.members.cache.find(member => member.id === user.id);
    } catch(ReferenceError){return null;}



    if (emojiname === "๐ฉ") {
        let createTicket = require("./reactionEvt/crearTicket.js");
        createTicket.run(bot, messageReaction, user)
    } else if (emojiname === "๐งป") {
        let cerrarTicket = require("./reactionEvt/cerrarTicket.js");
        cerrarTicket.run(bot, messageReaction, user)
    } else if (emojiname === "๐") {
        let eliminarTicket = require("./reactionEvt/eliminarTicket.js");
        eliminarTicket.run(bot, messageReaction, user)
    } else if (emojiname === "๐ธ") {
        let pagado = require("./reactionEvt/pagado.js"); 
         pagado.run(bot, messageReaction, user); 
    } else if (emojiname === "๐ถ") {
        let pagadom = require("./reactionEvt/pagadom.js"); 
         pagadom.run(bot, messageReaction, user); 
    } else if (emojiname === "๐ต") {
        let pagadof = require("./reactionEvt/pagadof.js"); 
         pagadof.run(bot, messageReaction, user); 
    } else if (emojiname === "๐ณ") {
        let pagadop = require("./reactionEvt/pagadop.js"); 
         pagadop.run(bot, messageReaction, user); 
    } else if (emojiname === "๐ด") {
        let pagadob = require("./reactionEvt/pagadob.js"); 
         pagadob.run(bot, messageReaction, user); 
    }

};    