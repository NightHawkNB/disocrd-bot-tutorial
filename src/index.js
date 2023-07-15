const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is ready`)
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    if(message.content === 'hello'){
        message.reply(`hello`)
    }
})

client.login("MTEyOTYzMDAxODI1MTc4NDIyNA.GSg4pr.ItxsAsbI2xtd3BNu7Z5KEdfxu3ejCuh-axXyEY")