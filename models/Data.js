const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: String,
  link: String,
  date: String,
});

module.exports = mongoose.model("Data", DataSchema);
