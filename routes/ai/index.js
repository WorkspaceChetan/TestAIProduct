const express = require("express");
const openai = require("../middlewares/openai");
const {
  initMiddleware,
  creditCheck,
  contentFilterCheck,
  sendResponse,
  creditPayment,
  saveToHistory,
} = require("./middleware");

let app = express.Router();

app.use("/", initMiddleware, creditCheck);

app.use("/", require("./guybrushthreepwood"));

app.use("/", contentFilterCheck);
app.use("/", creditPayment);
app.use("/", saveToHistory);

app.use("/", sendResponse);

module.exports = app;
