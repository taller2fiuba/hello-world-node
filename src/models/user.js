const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
});

userSchema.virtual("fullName").get(function () {
  return this.name + " " + this.lastname;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
