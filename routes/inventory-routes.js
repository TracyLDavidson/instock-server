const express = require("express");
const router = express.Router();
const {
  getAllInventory,
  getSingleInventory,
  createInventory,
} = require("../controllers/inventory-controller");

//get all inventories
router.route("/").get(getAllInventory);

//get single inventory:
router.route("/:id").get(getSingleInventory);

// POST a new inventory
router.route("/").post(createInventory);

module.exports = router;
