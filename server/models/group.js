const mongoose = require("mongoose");
const { ModuleFilenameHelpers } = require("webpack");

const GroupSchema = new mongoose.Schema({
    img_url: String,
    title: String,
    description: String,
    prospects: Number,
    creator_id: String,
    user_id: [String]
});

module.exports = mongoose.model("groups", GroupSchema);