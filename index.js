const Eris = require("eris");

function isWeekdayAndBusinessHours() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();

    return (dayOfWeek >= 1 && dayOfWeek <= 5) && (currentHour >= 8 && currentHour < 16);
}
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

if (isWeekdayAndBusinessHours()) {
    bot.connect(); // Get the bot to connect to Discord
}
