var jsonServer = require("json-server");
var db = require("./db");
var fs = require("fs");

var server = jsonServer.create();

fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

var router = jsonServer.router("/tmp/db.json");
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON server is runniong on:" + port);
});
