const Discord = require('discord.js');
const client = new Discord.Client();

var today = new Date();
var yyyy = today.getFullYear();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
    if (message.content === '?') {
    	message.channel.send('Befehle:\n? - was ich kann\nemre\ncp\nerens lol account');
  	}
    if (message.content === 'emre' || message.content === 'Emre') {
    	message.channel.send('Emre ist behindert, ja!');
  	}
    if (message.content === 'cp' || message.content === 'Cp') {
    	message.channel.send('https://www.youtube.com/channel/UChUSMj5WAeooPfhRqvEjAkw');
  	}
    if (message.content === 'erens lol account' || message.content === 'Erens lol account'|| message.content === 'Erens lol Account') {
        var text1 = 'Erens Lol Account ist noch ';
        var text2 = 9000-yyyy;
        var text3 = ' Jahre gebannt!';
        var ausgabe = text1 + text2 + text3;
    	message.channel.send(ausgabe);
        var erenkontext = 1;
  	}
    if (message.content === 'Warum?' || message.content === 'warum?'|| message.content === 'wieso?'|| message.content === 'Wieso?') {
    	if (erenkontext == 1) {
            message.channel.send('weil sein Freund gecheatet hat /:laugh:');
            erenkontext = 0;
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
