const { execute } = require("./play")

module.exports = {
    name: 'leave',
    description: 'make the bot gtfo',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        //Error c   hecking
        if(!voiceChannel)
        return message.channel.send("you need to be in a channel to stop the music");

        await voiceChannel.leave();
        await message.channel.send("brb guys, gonna go efficiently consume some sustanence to ensure my survival");
    }
}