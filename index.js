const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('496635681:AAERY7MoU5-dyYdZimuE78Bh3ritduHbnIg', {polling: true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, 'UPDATE 2')
});