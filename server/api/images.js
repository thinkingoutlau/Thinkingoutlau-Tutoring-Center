const router = require("express").Router();
const Image = require("../db/models/Image");

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
