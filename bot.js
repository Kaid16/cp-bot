const Discord = require('discord.js');
const client = new Discord.Client();

var today = new Date();
var yyyy = today.getFullYear();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong ak');
  	}
    if (message.content === 'murat' || message.content === 'Murat') {
    	message.channel.send('https://www.youtube.com/watch?v=TMEx2FdvDHk');
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
    }
    if (message.content === 'wasted' || message.content === 'Wasted') {
        message.channel.send('http://www.ebay.de/itm/Onyxpanther-Sonnensteinpanther-Saphirpanther-Rubinpanher-Jadepanther-Bundle-/292084474735?clk_rvr_id=1424408190491&utm_medium=cpc&utm_source=twenga&utm_campaign=twenga&utm_param=eyJlcyI6MCwicyI6NTMzODY0NywiY2kiOiIwNGZiNzExYjdmZDcxM2EzYjlkZGRjOGMzZGMzNmQ3MSIsImkiOiIyOTIwODQ0NzQ3MzUiLCJ0cyI6MTUxNjkwMTc5NCwidiI6Mywic28iOjE1MDAsImMiOjEzOTk3M30%3D&rmvSB=true');
  	}
    if (message.content === 'Warum?' || message.content === 'warum?'|| message.content === 'wieso?'|| message.content === 'Wieso?') {
        message.channel.send('weil sein Freund gecheatet hat :joy:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
