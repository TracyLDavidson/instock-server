<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const warehousesRoutes = require('./routes/warehousesRoutes')

const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.static("public"));
require('dotenv').config()

const API_PORT = process.env.PORT || 8000
const API_VERSION = process.env.VERSION || 'v1'
=======
require("dotenv").config();
console.log(process.env.PORT);
>>>>>>> develop

const express = require("express");
const app = express();

<<<<<<< HEAD
app.use(`/warehouses`, warehousesRoutes)



app.listen(API_PORT, () => {
    console.log(`Server listening on port ${API_PORT}`)
  })

=======
app.use(express.json());

const inventoryRoutes = require("./routes/inventory-routes");

const PORT = process.env.PORT || 5050;

// all users routes
app.use("/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
>>>>>>> develop
