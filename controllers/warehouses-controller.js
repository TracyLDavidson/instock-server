const knex = require("knex")(require("../knexfile"));

const getAllWarehouses = (_req, res) => {
  knex("warehouses") 
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving warehouses: ${err}`)
    );
};

// get a single warehouse
const getSingleWarehouse = (req, res) => {
  knex
    .select("*")
    .from("warehouses")
    .where({ id: req.params.id })
    .then((warehouses) => {
      if (warehouses.length === 0) {
        // if no warehouse is found with the given id
        return res.status(404).send("Warehouse not found");
      }
      const [warehouse] = warehouses;
      res.status(200).json(warehouses);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports = {
    getAllWarehouses,
    getSingleWarehouse,
};