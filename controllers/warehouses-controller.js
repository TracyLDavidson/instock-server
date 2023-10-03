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

// delete a single warehouse
const deleteSingleWarehouse = (req, res) => {
  knex
    .select("*")
    .from("warehouses")
    .where({ id: req.params.id })
    .del()
    .then((warehouses) => {
      if (warehouses.length === 0) {
        // if no warehouse is found with the given id
        return res.status(404).send("Warehouse not found");
      }
      res.status(200).send();
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const addSingleWarehouse = (req, res) => {
  if (
    !req.body.warehouse_name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact_name ||
    !req.body.contact_position ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    return res.status(400).send("Please provide all details in the request");
  }

  knex
    .select("*")
    .from("warehouses")
    .insert(req.body)
    .then((warehouses) => {
      return knex("warehouses").where({ id: warehouses[0] });
    })
    .then((createdWarehouses) => {
      res.status(201).json(createdWarehouses);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const editSingleWarehouse = (req, res) => {
  if (
    !req.body.warehouse_name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact_name ||
    !req.body.contact_position ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    return res.status(400).send("Please provide all details in the request");
  }

  knex
    .select("*")
    .from("warehouses")
    .where({ id: req.params.warehouseID })
    .update(req.body)
    .then(() => {
      return knex("warehouses").where({ id: req.params.warehouseID });
    })
    .then((updatedWarehouses) => {
      res.status(201).json(updatedWarehouses[0]);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports = {
  getAllWarehouses,
  getSingleWarehouse,
  deleteSingleWarehouse,
  addSingleWarehouse,
  editSingleWarehouse,
};
