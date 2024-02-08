const keep_alive = require('./keep_alive.js');
function isWeekdayAndBusinessHours() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
    return (dayOfWeek >= 1 && dayOfWeek <= 5) && (currentHour >= 8 && currentHour < 16);
}
if (isWeekdayAndBusinessHours()) {
const Eris = require("eris");
const bot = new Eris(process.env.token);
bot.on("error", (err) => {
  console.error(err);
});
bot.connect();
}
