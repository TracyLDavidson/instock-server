const express = require("express");
const router = express.Router();
const fs = require("fs");

const {
  getAllWarehouses,
  getSingleWarehouse,
  deleteSingleWarehouse,
  addSingleWarehouse,
  editSingleWarehouse,
} = require("../controllers/warehouses-controller");

//get all warehouses:
router.route("/").get(getAllWarehouses);

//get single warehouse:
router.route("/:id").get(getSingleWarehouse);

//delete single warehouse:
router.route("/:id").delete(deleteSingleWarehouse);

//post single warehouse:
router.route("/add").post(addSingleWarehouse);

//edit single warehouse:
router.route("/:warehouseID/edit").put(editSingleWarehouse);

module.exports = router;
