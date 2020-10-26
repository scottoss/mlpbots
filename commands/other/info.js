const { Command } = require('discord.js-commando');

module.exports = class InfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'info',
      aliases: ['bot-maker', 'bot-creator'],
      memberName: 'info',
      group: 'other',
      description: "Replies with the bot creator's name"
    });
  }

  run(message) {
    message.say(
      'Made by DerpysTown#9705 with :heart: '
    );
  }
};
