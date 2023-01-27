const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  googleid: String,
  group_code: String,
  question: String,
  answer: String,
});

module.exports = mongoose.model("answer", AnswerSchema);
