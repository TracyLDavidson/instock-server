const express = require("express");
const router = express.Router();
const { getUniqueCategories } = require("../controllers/categories-controller");

//get all inventories
router.route("/").get(getUniqueCategories);

module.exports = router;