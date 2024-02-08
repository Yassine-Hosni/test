const keep_alive = require('./keep_alive.js');
function isWeekdayAndBusinessHours() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();

    // Check if it's Monday to Friday and between 9 am and 5 pm
    return (dayOfWeek >= 1 && dayOfWeek <= 5) && (currentHour >= 8 && currentHour < 16);
}

if (isWeekdayAndBusinessHours()) {
    const Eris = require("eris");
    // Replace TOKEN with your bot account's token
    const bot = new Eris(process.env.token);

    bot.on("error", (err) => {
        console.error(err); // or your preferred logger
    });

    bot.connect();
}
