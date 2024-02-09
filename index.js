// Importing keep_alive module
const keep_alive = require('./keep_alive.js');
console.log("test 1 completed");
// Function to check if it's a weekday and business hours
function isWeekdayAndBusinessHours() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
    // Check if it's a weekday (Monday to Friday) and if the current hour is between 8 AM (inclusive) and 4 PM (exclusive)
    return (dayOfWeek >= 1 && dayOfWeek <= 5) && (currentHour >= 8 && currentHour < 16);
}

// Importing Eris library
const Eris = require("eris");
// Creating a new instance of Eris bot with the provided token
const bot = new Eris(process.env.token);
console.log("test 2 completed");
// Event listener for any errors that occur
bot.on("error", (err) => {
    console.error(err);
});

// If it's a weekday and business hours, connect the bot
if (isWeekdayAndBusinessHours()) {
    bot.connect();
    console.log("Bot connected successfully!");
} else {
    console.log("Bot not connected. It's either not a weekday or not business hours.");
}
