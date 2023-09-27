require("dotenv").config();
console.log(process.env.PORT);

const express = require("express");
const app = express();

app.use(express.json());

const inventoryRoutes = require("./routes/inventory-routes");

const PORT = process.env.PORT || 5050;

// all users routes
app.use("/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
