const knex = require("knex")(require("../knexfile"));

const getAllInventory = (_req, res) => {
  knex("inventories") // select * from inventories
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving inventories: ${err}`)
    );
};

// get a single inventory
const getSingleInventory = (req, res) => {
  knex
    .select("*")
    .from("inventories")
    .where({ id: req.params.id })
    .then((inventories) => {
      if (inventories.length === 0) {
        // if no inventory is found with the given id
        return res.status(404).send("Inventory not found");
      }
      const [inventory] = inventories;
      res.status(200).json(inventories);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

const getWarehouseInventory = (req, res) => {
  knex
    .select("*")
    .from("inventories")
    .where({ warehouse_id: req.params.warehouse_id })
    .then((inventories) => {
      if (inventories.length === 0) {
        return res.json([]);
      }
      res.status(200).json(inventories);
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

//CREATE a new inventory:
const createInventory = (req, res) => {
  const { warehouse_id, item_name, description, category, status, quantity } =
    req.body;

  // Validate request body
  if (
    !warehouse_id ||
    !item_name ||
    !description ||
    !category ||
    !status ||
    quantity === undefined
  ) {
    return res.status(400).send("All values are required.");
  }

  if (typeof quantity !== "number" || quantity < 0) {
    return res.status(400).send("Quantity must be a non-negative number.");
  }

  // Check if the provided warehouse_id already exists in the warehouse table
  knex("warehouses")
    .where({ id: warehouse_id })
    .first()
    .then((warehouse) => {
      if (!warehouse) {
        return res.status(400).send("Invalid warehouse_id.");
      }

      // insert new inventory item
      return knex("inventories")
        .insert({
          warehouse_id,
          item_name,
          description,
          category,
          status,
          quantity,
        })
        .returning("*");
    })
    .then((inventories) => {
      const [inventory] = inventories;
      res.status(201).json(inventory);
    })
    .catch((err) => res.status(400).send(`Error: ${err}`));
};

const deleteSingleInventory = (req, res) => {
  knex("inventories")
    .delete()
    .where({ id: req.params.id })
    .then((data) => {
      console.log(data)
      res.send("Item deleted").status(200)
    })
}


module.exports = {
  getAllInventory,
  getSingleInventory,
  getWarehouseInventory,
  createInventory,
  deleteSingleInventory,
};
