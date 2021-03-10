const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
const productRouter = require("./routes/products");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/service-products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("dotenv").config();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productRouter);
//app.use("/users", usersRouter);

module.exports = app;
