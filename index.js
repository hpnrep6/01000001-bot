const {trigger,token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const queue = new Map();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

function isNum(num) {
    return !isNaN(num);
}

client.on('message', async message => {
    const args = message.content.split(" ");
    // spam ----------------------
    let indexOfSpace = message.content.indexOf(" ");
    if(message.content.startsWith("!spam") && indexOfSpace != -1 && isNum(message.content.substring(5,indexOfSpace))) {
        if(message.member.hasPermission('MANAGE_ROLES')){
            let messageRepeat = parseInt(message.content.substring(5, indexOfSpace));
            try{
                let userId = message.mentions.users.first().id;
                for(i = 0; i < messageRepeat % 250; i++) {
                    message.channel.send('<@' + userId + '>'); // <@129213131092839018> format for mentions
                }
            }catch(e){}
        }
        else{
            if(message.content.startsWith("!spam") && indexOfSpace != -1 && isNum(message.content.substring(5,indexOfSpace))) {
                let messageRepeat = parseInt(message.content.substring(5, indexOfSpace));
                try{
                    let userId = message.mentions.users.first().id;
                    for(i = 0; i < messageRepeat % 250; i++) {
                        message.reply('');
                    }
                }catch(e){}
            }
        }
    }    
    else if(message.content.startsWith("!spamrand") && indexOfSpace != -1 && message.member.hasPermission('MANAGE_ROLES')) {
        try{
            let userId = message.mentions.users.first().id;
            for(i = 0; i < (Math.random()*92412131) % 100; i++) {
                message.channel.send('<@' + userId + '>'); // <@129213131092839018> format for mentions
            }
        }catch(e){}
    }
    else if(message.content.startsWith("!spameveryone") && args.length > 1 && message.member.hasPermission('MANAGE_ROLES')) {
        try{
            for(i = 0; i < parseInt(args[1]) % 251; i++) {
                message.channel.send("@everyone");
            }
        }catch(e){}    
    }
    // ---------------------
});
