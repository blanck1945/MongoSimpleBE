const express = require("express");
const ScoreController = require("../controllers/ScoreController");

const router = express.Router();

router.get("/score", ScoreController.index);

router.post("/score/create", ScoreController.create);

module.exports = router;
