const express = require("express");

const {
  getBreeds,
  getBreed,
  deleteBreed,
  updateBreed,
  saveNewBreed,
} = require("../controller/breeds");

const router = express.Router();

router.route("/").get(getBreeds).post(saveNewBreed);

router.route("/:id").put(updateBreed).delete(deleteBreed).get(getBreed);

module.exports = router;
