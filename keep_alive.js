var http = require('http');
const currentDate = new Date();

http.createServer(function (req, res) {
  res.write("I'm alive"+currentDate.getHours());
  res.end();
}).listen(8080);
