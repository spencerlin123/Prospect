const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  img_url: String,
  joined_groups: [String],
  created_groups: [String]
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
