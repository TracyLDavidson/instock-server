const express = require("express");
const router = express.Router();
const { getAllInventory } = require("../controllers/inventory-controller");

//get all inventories
router.route("/").get(getAllInventory);

module.exports = router;
