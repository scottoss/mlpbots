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
      'invite me to your own server https://discord.com/api/oauth2/authorize?client_id=735513965676855410&permissions=573963584&redirect_uri=https%3A%2F%2Fdiscord.gg%2FphvcVK2&scope=bot '
    );
  }
};
