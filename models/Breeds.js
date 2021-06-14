const mongoose = require("mongoose");
const BreedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add Breed Name"],
    unique: true,
    trim: true,
    maxlength: [100, "More then 100 Characters not allowed"],
  },
  description: {
    type: String,
    required: [true, "Please add Breed Description"],
    trim: true,
    maxlength: [1000, "More then 100 Characters not allowed"],
  },
});
module.exports = mongoose.model("Breeds", BreedSchema);
