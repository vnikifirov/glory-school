const app = require("./api/app"),
  http = require("http");

const PORT = process.env.PORT || 8006;

const server = new http.createServer(app);

server.listen(PORT, err => {
  if (err) console.error(err);
  console.log(`Server listening on port ${PORT}`);
});
