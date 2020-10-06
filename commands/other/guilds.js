const { Command } = require('discord.js-commando');

module.exports = class guildsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'guilds',
      aliases: ['guild-info', 'guilds'],
      memberName: 'guilds',
      group: 'other',
      description: "shows amount of servers the bot is in"
    });
  }

  run(message) {
    message.say(
      'Client.guilds.size '
    );
  }
};
