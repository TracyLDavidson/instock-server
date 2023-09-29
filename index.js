const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// const API_VERSION = process.env.VERSION || 'v1'
require("dotenv").config();

const PORT = process.env.PORT || 5050;

//warehouses
const warehousesRoutes = require('./routes/warehouses-routes')
app.use(`/warehouses`, warehousesRoutes)

//inventory
const inventoryRoutes = require("./routes/inventory-routes");
app.use("/inventory", inventoryRoutes);

//categories
const categoriesRoutes = require("./routes/categories-routes");
app.use("/categories", categoriesRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
