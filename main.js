//https://discord.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=2147483641
//Need a clear msg command, to hide the commands of him joining.
const Discord = require('discord.js');

const client = new Discord.Client();

//Notice the Treetin
const prefix ='TTT, ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=> {
    console.log('TreeTin is online!');
});

client.on('message', message => {
    //Breaks code if doesnt have author
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'execute_order'){
        message.channel.send('yes milord');
        client.commands.get('executeorder').execute(message);
    }
    else if(command == 'play'){
        client.commands.get('play').execute(message, args);
    }
    else if(command =='gtfo'){
        client.commands.get('leave').execute(message, args);
    }
    else if(command == 'jebait'){
        client.commands.get('jebait').execute(message);
        client.commands.get('clear').execute(message);
    }
    else if(command == 'help'){
        client.commands.get('ping').execute(message, args);
    }

    //Add more commands

});


client.login('ODE1MjU2MDMzOTQ1NTgzNjM2.YDpwWQ.O74O4M_cpYkBzfU8Utz4QfbYhKQ');
