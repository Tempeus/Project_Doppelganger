//This plays sounds from the music folder. 
//When the bot joins, it will play one soundbit that is categorised as Intro (it will have the prefix intro_)
//Then it will play a random soundbit every 10 seconds.
//Then it will play rick roll or some random shit to tell dumbasses that they've been trolled.

const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'jebait',
    description: "insert tritin lines",
    async execute(message){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel)
            return message.channel.send('Discord is glitch, I cant join');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT'))
            return message.channel.send('Someone demoted me, dafuq I cant connect');
        if(!permissions.has('SPEAK'))
            return message.channel.send('someone demoted me, dafuq');

        const connection = await voiceChannel.join();

        message.member.voice.channel.join().then(VoiceConnection => {
            // Playing the music, and, on finish, disconnecting the bot.
            VoiceConnection.play("./music/intro_whatdoyouwant.mp3").on("finish", () => VoiceConnection.disconnect());
        }).catch(e => console.log(e))
    }
}