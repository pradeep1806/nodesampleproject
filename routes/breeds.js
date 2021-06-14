const express = require("express");

const {
  getBreeds,
  getBreed,
  deleteBreed,
  updateBreed,
  saveNewBreed,
} = require("../controller/breeds");

const router = express.Router();
//route get and post paramters
router.route("/").get(getBreeds).post(saveNewBreed);

//Route protocols that accepts ID as input
router.route("/:id").put(updateBreed).delete(deleteBreed).get(getBreed);

module.exports = router;
