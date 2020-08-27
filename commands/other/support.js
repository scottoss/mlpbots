const { Command } = require('discord.js-commando');

module.exports = class SupportCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'support',
      aliases: ['bot-support', 'bot-help-server'],
      memberName: 'support',
      group: 'other',
      description: "Replies with the bot support server"
    });
  }

  run(message) {
    message.say(
      'join the support server https://discord.gg/phvcVK2'
    );
  }
};
