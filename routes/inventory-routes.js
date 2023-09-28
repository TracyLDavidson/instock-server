const express = require("express");
const router = express.Router();
const {
  getAllInventory,
  getSingleInventory,
} = require("../controllers/inventory-controller");

//get all inventories
router.route("/").get(getAllInventory);

//get single inventory:
router.route("/:id").get(getSingleInventory);

module.exports = router;
