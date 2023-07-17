require('dotenv').config()
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js')

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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value

        //! Here ? infront of .value means an optional value
        //* const num2 = interaction.options.get('second-number')?.value
        const num2 = interaction.options.get('second-number').value

        interaction.reply(`The sum is ${num1+num2 }`)
    }else if(interaction.commandName === 'embed'){
        const embed = new EmbedBuilder()
            .setTitle("Embed title")
            .setDescription('This is an Embed')
            .setColor('Random')
            .addFields(
                {
                    name: `:smile: Field 1`,
                    value: 'Some random value',
                    inline: true
                },
                {
                    name: ':grin: Field 2',
                    value: 'Any value',
                    inline: true
                },
                {
                    name: ':smiley: Field 3',
                    value: 'Field 3 Values',
                    inline: true
                },
                {
                    name: 'Field 1',
                    value: 'Some random value',
                    inline: true
                },
                {
                    name: 'Field 2',
                    value: 'Any value',
                    inline: true
                },
                {
                    name: 'Field 3',
                    value: 'Field 3 Values',
                    inline: true
                }
            )
        interaction.reply({embeds: [embed]})
    }
})

client.login(process.env.TOKEN)