const ms = require('ms');

module.exports = {
    name: "mute",
    description: "shutting someone up",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Minions');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Prison');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                //Manual mute
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Stop, you have violated the law!`);
                return;
            }

            //timer mute
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Stop, you have violated the law for ${ms(ms(args[1]))}!`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send("This person does not exist dafuq");
        }
    }
}