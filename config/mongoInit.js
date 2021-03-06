let mongoose = require("mongoose");

const server = "localhost:27017";
const database = "chakra";

module.exports.initDb = () => {
  mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error!"));
  db.once("open", () => {
    console.log("connected to database...");
    Round1 = require("../models/Round1");
    Round2 = require("../models/Round2");
    Round3 = require("../models/Round3");
    Round4 = require("../models/Round4");
    Round5 = require("../models/Round5");
    Score = require("../models/Score");
  });
};
