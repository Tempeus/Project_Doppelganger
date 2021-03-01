module.exports = {
    name: "unmute",
    description: "unshutting someone up",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Minions');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Prison');


            let memberTarget = message.guild.members.cache.get(target.id);

            //Manual mute
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> You have your rights`);
        } else{
            message.channel.send("This person does not exist dafuq");
        }
    }
}