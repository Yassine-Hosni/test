var http = require('http');

http.createServer(function (req, res) {
  const currentDate = new Date();
  res.write("I'm alive"+currentDate.getHours());
  res.end();
}).listen(8080);
