const { Command } = require('discord.js-commando');

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['invite-to-server', 'invite'],
      memberName: 'invite',
      group: 'other',
      description: "creates a bot invite"
    });
  }

  run(message) {
    message.say(
      'invite me or my friends to your own server https://ossscott40.wixsite.com/mlpbots/invite '
    );
  }
};
