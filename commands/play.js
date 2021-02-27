//Music bot
//Implement a 10% chance of him playing rickroll
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays sounds',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel)
            return message.channel.send('Discord is glitch, I cant join');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT'))
            return message.channel.send('Someone demoted me, dafuq I cant connect');
        if(!permissions.has('SPEAK'))
            return message.channel.send('someone demoted me, dafuq');

        //Might remove this later on 
        if(!args.length)
            return message.channel.send('you need to add a video, dumbass');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek:0, volume:1})
            
            //Might have to play an array then finish entirely
            .on('finish', ()=> {
                voiceChannel.leave();
                message.channel.send('brb guys, i gotta consume sustanence')
            });

            //might remove
            await message.replay(`playing something`)

            return
        }

        const connection = await voiceChannel.join();

        //Might remove this later on
        const videoFinder = async(query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join (' '));
        if(video) {
            //Output to discord channel
            const stream = ytdl(video.url, {filter: 'audioonly'});
            //play the thing
            connection.play(stream, {seek: 0, volume: 1})

            //Might remove -- Make the discord bot leave
            .on('finish', () =>{
                voiceChannel.leave();
            });

            //Might remove
            await message.reply(`playing something`)
        }
        else {
            //Might remove this
            message.channel.send('I didnt find shit');
        }
    }
}