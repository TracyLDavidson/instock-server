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

module.exports = {
  getAllInventory,
};
