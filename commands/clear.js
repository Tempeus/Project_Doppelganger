//To hide the jebait command, this will clear the "TTT, jebait" command

module.exports = {
    name: 'clear',
    description: "hide the crime scene",
    async execute(message){
        //Remove this later, we dont need an argument to clear the message
 
        await message.channel.messages.fetch({ limit: 1}).then(messages =>{
            message.channel.bulkDelete(messages)
         });
    }
}