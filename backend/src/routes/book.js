const bookController = require("../controllers/bookController.js");
const express = require("express");

const router = express.Router();

router.post("/create", bookController.createBook);

module.exports = router;
