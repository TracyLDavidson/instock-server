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

module.exports = {
  getAllInventory,
  getSingleInventory,
};
