const { Util } = require('discord.js')
module.exports = {
    execute: function (message, args) {
        message.channel.send(`Hi, ${message.author}. ${args[0] ? Util.cleanContent(args[0]) : "Try adding an argument!"}`)
    },
    registerEventHandlers: function (bot) {
        bot.addListener("on_reaction", function (message){
            message.channel.send("Someone reacted!") //please for the love of god dont do this in a real use case
        })
    }
}
