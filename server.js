const fs = require("fs");
const http = require("http");
const path = require("path");

http
  .createServer((_req, res) => {
    fs.readFile(path.resolve(__dirname, "./index.html"), (data, err) => {
      if (!err) {
        res.end(data);
      } else {
        res.end(err);
      }
    });
  })
  .listen(80);
