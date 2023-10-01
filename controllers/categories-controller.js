const knex = require("knex")(require("../knexfile"));

const getXUniqueCategories = (_req, res) => {
  knex("inventories") // select * from inventories
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving inventories: ${err}`)
    );
};

const getUniqueCategories = (_req, res) => {
  knex("inventories")
    .distinct("category")
    .from("inventories")
    .then((categories) => {
      res.json(categories);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = {
  getUniqueCategories,
};
