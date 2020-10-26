const client = new CommandoClient();
const { Command } = require('discord.js-commando');

module.exports = class guildsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'guilds',
      aliases: ['guild-info', 'guilds'],
      memberName: 'guilds',
      group: 'other',
      description: "shows amount of servers the bot is in (not working yet)"
    });
  }

  run(message) {
    message.say(
      `i am currently running in: ${Array.from(client.guilds.cache.array()).length} servers!`
    );
  }
};
