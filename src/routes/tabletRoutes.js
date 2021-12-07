const express = require("express");
const TabletController = require("../controllers/TabletController");

const router = express.Router();

router.get("/test/tablet/:code", TabletController.index);

module.exports = router;
