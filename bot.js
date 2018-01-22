const Discord = require('discord.js');
const client = new Discord.Client();

var today = new Date();
var yyyy = today.getFullYear();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === '?') {
    	message.reply('Befehle:\n? - was ich kann\nemre\ncp\nerens lol account');
  	}
    if (message.content === 'emre' || message.content === 'Emre') {
    	message.reply('Emre ist behindert, ja!');
  	}
    if (message.content === 'cp' || message.content === 'Cp') {
    	message.reply('https://www.youtube.com/channel/UChUSMj5WAeooPfhRqvEjAkw');
  	}
    if (message.content === 'erens lol account' || message.content === 'Erens lol account') {
    	message.reply('Erens lol Account ist ${9000-yyyy} Jahre gebannt');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
