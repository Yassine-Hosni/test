const http = require('http');

http.createServer(function (req, res) {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const currentHour = currentDate.getHours();
  res.write("I'm alive "+currentHour);
  res.end();
}).listen(8080);
