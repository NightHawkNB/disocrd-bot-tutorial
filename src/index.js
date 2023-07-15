const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.login("MTEyOTYzMDAxODI1MTc4NDIyNA.GSg4pr.ItxsAsbI2xtd3BNu7Z5KEdfxu3ejCuh-axXyEY")