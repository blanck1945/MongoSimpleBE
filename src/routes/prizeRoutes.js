const express = require("express");
const PrizeController = require("../controllers/PrizeController");

const router = express.Router();

router.get("/v2/rewards/businesses/:business_id", PrizeController.index);
router.get("/v2", PrizeController.index);

//router.post("/score/create", ScoreController.create);

module.exports = router;
