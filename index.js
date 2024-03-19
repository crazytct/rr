// Import the discord.js module
const Discord = require('discord.js');

// Create a new Discord client
const client = new Discord.Client();

// Set your bot's token (this should be kept private)


// Event listener for when the bot is ready
client.on('ready', () => {
    console.log('Bot is ready!');
});

// Event listener for when a message is received
client.on('message', message => {
    // Check if the message starts with the prefix and if the author is not a bot
    if (message.content.startsWith('!') && !message.author.bot) {
        // Extract the command and arguments from the message
        const args = message.content.slice(1).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Check the command
        switch (command) {
            case 'ping':
                // Respond with 'Pong!'
                message.channel.send('Pong!');
                break;
            case 'hello':
                // Respond with 'Hello!'
                message.channel.send('Hello!');
                break;
            // Add more commands as needed
        }
    }
});

// Log in to Discord with your app's token
client.login('MTE4OTkzMjc5MTc0NDQ0NjQ4NA.GiK1bq.sjnIMk6N8jOmUNtarQNsVY40NUREt2jkIYpX28');
