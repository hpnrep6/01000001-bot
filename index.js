const token = //token
cont trigger = "$";
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

function isNum(num) {
    return !isNaN(num);
}


client.on('message', async message => {
    let args = message.content.split(" ");
    let messageContent = message.content;
    let indexOfSpace = messageContent.indexOf(" ");

    if(messageContent.startsWith(trigger + "spammember") && indexOfSpace != -1 && isNum(messageContent.substring(11,indexOfSpace))) {
        spamMember();
    }    
    else if(messageContent.startsWith(trigger + "spamrand") && indexOfSpace != -1 && message.member.hasPermission('MANAGE_ROLES')) {
        spamRandom();
    }
    else if(messageContent.startsWith(trigger + "spameveryone") && args.length > 1 && message.member.hasPermission('MANAGE_ROLES')) {
        spamEveryone();
    }
    else if(messageContent.startsWith(trigger + "spammessage") && indexOfSpace != -1 && isNum(messageContent.substring(12, indexOfSpace)) && message.member.hasPermission('MANAGE_ROLES')) {
        spamMessage();
    }

    // spam functions
    function spamMember() {
        if(message.member.hasPermission('MANAGE_ROLES')){
            let messageRepeat = parseInt(messageContent.substring(11, indexOfSpace));
            try{
                let userId = message.mentions.users.first().id;
                for(i = 0; i < messageRepeat % 250; i++) {
                    message.channel.send('<@' + userId + '>'); // <@129213131092839018> format for mentions
                }
            }catch(e){}
        }
        else{
            if(messageContent.startsWith(trigger + "spam") && indexOfSpace != -1 && isNum(messageContent.substring(5,indexOfSpace))) {
                let messageRepeat = parseInt(messageContent.substring(5, indexOfSpace));
                try{
                    let userId = message.mentions.users.first().id;
                    for(i = 0; i < messageRepeat % 250; i++) {
                        message.reply('');
                    }
                }catch(e){}
            }
        }
    }
    function spamRandom() {
        try{
            let userId = message.mentions.users.first().id;
            for(i = 0; i < (Math.random()*92412131) % 100; i++) {
                message.channel.send('<@' + userId + '>'); // <@129213131092839018> format for mentions
            }
        }catch(e){}
    }
    function spamEveryone() {
        try{
            for(i = 0; i < parseInt(args[1]) % 251; i++) {
                message.channel.send("@everyone");
            }
        }catch(e){}    
    }
    function spamMessage() {
        try{
            for(i = 0; i < parseInt(messageContent.substring(12, indexOfSpace)) % 500; i++) {
                message.channel.send(messageContent.substring(indexOfSpace + 1));
            }
        } catch (e) {}
    }
});
