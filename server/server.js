const express = require('express')
const ct = require("./controller")
const app = express()

app.use(express.json())

app.get('/api/orders',ct.displayOrders)
app.post('/api/order',ct.createOrder)
app.put('/api/order/:id',ct.editOrder)
app.delete('/api/order/:id',ct.deleteOrder)

const PORT = 5000
app.listen(PORT,()=>console.log("Welcome to Das Funky Towne on port 5k!"))