const { connectionSocket } = require("./utils/soket.io");
const { PORT, MONGODBURL } = require("./config/config");
const cartsRouteBd = require("./routes/carts.router.bd");
const chatsRouter = require("./routes/chats.router");
const cookie = require("cookie-parser");
const express = require("express");
const handlebars = require("express-handlebars");
const initPassaport = require("./utils/passaport.config");
const mongoose = require("mongoose");
const passport = require("passport");
const productsRouteBd = require("./routes/products.router.bd");
const server = express();
const sessionRoute = require("./routes/session.route");
const viewRoute = require("./routes/views.route");
const router = require("./routes/router.js");
if (MONGODBURL) import("./config/config.db.js");

const httpServer = server.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`)
);

//handlerbars
server.engine("handlebars", handlebars.engine());
server.set("views", __dirname + "/views");
server.set("view engine", "handlebars");

// passport / cookie-parse
initPassaport();
server.use(passport.initialize());
server.use(cookie());

//express
server.use(express.static(__dirname + "/public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//rutas

server.use("/", router);

connectionSocket(httpServer);
