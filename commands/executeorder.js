//This clone bot will do something cool, idk yet
module.exports = {
    name: 'executeorder',
    description: "Good soldiers follow orders",
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
            VoiceConnection.play("./music/rick.mp3").on("finish", () => VoiceConnection.disconnect());
        }).catch(e => console.log(e))
    }
}