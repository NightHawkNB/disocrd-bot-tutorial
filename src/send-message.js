require('dotenv').config()
const { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

const roles = [
    {
        id: '1130643402271236276',
        label: 'Red'
    },
    {
        id: '1130643342422720542',
        label: 'Green'
    },
    {
        id: '1130643300924272780',
        label: 'Blue'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1130644055471165511')
        if(!channel) return;

        const row = new ActionRowBuilder()
        roles.forEach(role => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        })

        await channel.send({
            content: 'Claim or Remove a Role',
            components: [row]
        })
        process.exit()
    } catch (error) {
        console.log(error)
    }
})

client.login(process.env.TOKEN)