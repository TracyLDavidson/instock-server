const express = require("express");
const router = express.Router();
const {
  getAllInventory,
  getSingleInventory,
  getWarehouseInventory,
  createInventory,
  deleteSingleInventory,
  updateSingleInventory,
} = require("../controllers/inventory-controller");

//get all inventories
router.route("/").get(getAllInventory);

//get warehouse inventory:
router.route("/warehouse/:warehouse_id").get(getWarehouseInventory);

//get single inventory:
router.route("/:id").get(getSingleInventory);

// POST a new inventory
router.route("/").post(createInventory);

// PUT a new inventory
router.route("/:id").put(updateSingleInventory);

// delete an inventory item
router.route("/:id").delete(deleteSingleInventory);

module.exports = router;
