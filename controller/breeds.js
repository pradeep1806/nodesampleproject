const ErrorResponse = require("../utils/errorResponse");
const Breed = require("../models/Breeds");
const asyncHandler = require("../middlewares/async");

//@desc   Get all Breeds
//@route  GET /api/v1/breeds
//@access Public api
exports.getBreeds = async (req, res, next) => {
  const breeds = await Breed.find();
  res.status(200).json({ success: true, count: breeds.length, data: breeds });
};

//@desc   Get breed by Id
//@route  GET /api/v1/breeds/:id
//@access Public api
exports.getBreed = asyncHandler(async (req, res, next) => {
  const breed = await Breed.findById(req.params.id);
  if (!breed) {
    //BAD REQUEST
    res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: breed });
});

//@desc   Save New Breed
//@route  POST /api/v1/breeds
//@access Public api
exports.saveNewBreed = asyncHandler(async (req, res, next) => {
  const breed = await Breed.create(req.body);
  res.status(200).json({
    success: true,
    data: breed,
  });
});

//@desc   Update Breed for given breed Id
//@route  PUT /api/v1/breeds/:id
//@access Public api
exports.updateBreed = asyncHandler(async (req, res, next) => {
  const breed = await Breed.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: breed });
});

//@desc   Delete breed by Id
//@route  DELETE /api/v1/breeds/:id
//@access Public api
exports.deleteBreed = asyncHandler(async (req, res, next) => {
  const breed = await Breed.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true });
});
