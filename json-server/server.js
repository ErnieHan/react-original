const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const postResponse = require(path.join(__dirname, "postResponse.js"));
const routes = require(path.join(__dirname, "routes.json"));

// 模擬 POST 這支API時 resoponse 寫進回傳資料
server.post("/cm/v1/campaigns", function (req, res) {
  // 網站的Domain網域
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  // 回傳的資料為{ region: "TWN", campaignCode: "MR" }
  res.jsonp({ region: "TWN", campaignCode: "MR" });
});

server.post("/ernie1", function (req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.status(200).jsonp({
    errors: [
      {
        message: "Shopping cart already has the same solitaire diamond.",
        errorCode: "E00954",
        entity: "",
        property: "",
        invalidValue: ""
      }
    ]
  });
});

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(postResponse);
server.use(router);
server.listen(8081, () => {
  console.log("JSON Server is running");
});
