const http = require('http');

http.createServer(function (req, res) {
  const currentDate = new Date(); // Move this line inside the request handler
  res.write("I'm alive " + currentDate.getHours());
  res.end();
}).listen(8080);
