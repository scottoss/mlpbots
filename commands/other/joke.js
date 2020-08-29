const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class MotivationCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'joke',
      aliases: ['joke, joke-quote'],
      group: 'other',
      memberName: 'joke',
      description: 'Get a random mlp joke'
    });
  }
  run(message) {
    // thanks to https://type.fit/api/quotes

    const jsonQuotes = fs.readFileSync(
      'resources/quotes/motivational.json',
      'utf8'
    );
    const quoteArray = JSON.parse(jsonQuotes).quotes;

    const randomQuote =
      quoteArray[Math.floor(Math.random() * quoteArray.length)];

    const quoteEmbed = new MessageEmbed()
      .setTitle(randomQuote.author)
      .setDescription(randomQuote.text)
      .setColor('#ff003c');
    return message.channel.send(quoteEmbed);
  }
};
