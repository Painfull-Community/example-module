module.exports = {
    execute: function (args, message) {
        message.channel.send(`Hi, ${message.author}. ${args[0] ? args[0] : "Try adding an argument!"}`)
    }
}