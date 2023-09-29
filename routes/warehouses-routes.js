const express = require('express')
const router = express.Router()
const fs = require('fs')

const {
    getAllWarehouses,
    getSingleWarehouse,
} = require("../controllers/warehouses-controller");
  
//get all warehouses:
router.route("/").get(getAllWarehouses);
  
//get single warehouse:
router.route("/:id").get(getSingleWarehouse);
  



module.exports = router