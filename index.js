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


app.use(`/warehouses`, warehousesRoutes)



app.listen(API_PORT, () => {
    console.log(`Server listening on port ${API_PORT}`)
  })

