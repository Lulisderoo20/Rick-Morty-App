/*const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
// const fs = require("fs");
// const data = require("./utils/data");
const PORT = 3001;
// const server =
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("onsearch")) {
      const charId = req.url.split("/").at(-1);
      getCharById(res, charId);
    }
    if (req.url.includes("detail")) {
      const idDetail = req.url.split("/").at(-1);
      getCharDetail(res, idDetail);
    }
  })
  .listen(PORT, "localhost");

// module.exports = server; no tengo q exportar?

// const PORT = 3001;
// const server = http.createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     console.log(`Server raised in port ${PORT} in console`);
//     if (req.url.includes("rickandmorty/character")) {
//       console.log(req.url);
//       const id = Number(req.url.split("/").at(-1));
//       const character = data.find((cha) => cha.id === id);
//       console.log(character);

//       if (character) {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "character not found" }));
//       }
//     }
//   })
//   .listen(PORT, `localhost`);

// module.exports = server;
*/

const express = require('express');
const router=require('./routes');
const morgan=require('morgan');

const server = express();
const PORT = 3001;

server.use(express.json());

server.use(morgan('dev'));

server.use('/', router);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

module.exports = server;