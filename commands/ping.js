//Add feature if discord user meetublu#6284 requests the ping, you append bitch next output.
module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        if(!message.member.user.username.localeCompare("meetublu")){
            message.channel.send("stfu, bitch");
        }
        else if(!message.member.user.username.localeCompare("HollowTube")){
            message.channel.send("yes king");
        }
        else{
            message.channel.send('stfu'); 
        }
    }
}