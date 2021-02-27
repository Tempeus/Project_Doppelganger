
//Add feature if discord user meetublu#6284 requests the ping, you append bitch next output.
module.exports = {
    name: 'help',
    description: "this is a help command for the plebz",
    execute(message, args){
        if(!message.member.user.username.localeCompare("meetublu")){
            message.channel.send("no");
        }
        else if(!message.member.user.username.localeCompare("HollowTube")){
            message.channel.send("Of course, milord\n To summon me, you must use TTT, \n I obey to orders suchas: play, ping, gtfo, help, executeorder");
        }
        else{
            message.channel.send("Why do you need help? This is eaaassssyyyyy"); 
        }
    }
}