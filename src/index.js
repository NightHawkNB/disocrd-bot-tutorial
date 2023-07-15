require('dotenv').config()
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

    if(message.content.toLowerCase() === 'hello' || message.content.toLowerCase() === 'hellow'){
        message.reply(`Hi, ${message.author.username}`)
    }
})

client.login(process.env.TOKEN)