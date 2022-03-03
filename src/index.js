module.exports = {
    execute: function (message, args) {
        message.channel.send(`Hi, ${message.author}. ${args[0] ? "Cool argument!" : "Try adding an argument!"}`)
    },
    registerEventHandlers: function (bot) {
        bot.addListener("messageReactionAdd", function (message){
            message.channel.send("Someone reacted!") //please for the love of god dont do this in a real use case
        })
    }
}
