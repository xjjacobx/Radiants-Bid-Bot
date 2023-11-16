require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Discord Bot is ready!');
});

client.login(process.env.DISCORD_BOT_TOKEN);
