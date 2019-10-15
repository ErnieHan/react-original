const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const postResponse = require(path.join(__dirname, "postResponse.js"));
const routes = require(path.join(__dirname, "routes.json"));

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(postResponse);
server.use(router);
server.listen(8081, () => {
  console.log("JSON Server is running");
});
