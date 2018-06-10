const express         = require('express')
const compression     = require('compression')
const cors            = require('cors')
const mock_data       = require('./mock-data.json')
const config          = require('./config.json')

const app = express()

app.use(compression())
app.use(cors())

app.get('/products', (req, res)=> res.json(mock_data))
app.get('/help', (req, res)=> res.json({"help": "Try requesting '/products'"}))
app.get('*', (req, res)=> res.json({"error": "This is not the endpoint you are looking for"}))

app.listen(config.port, ()=> console.log(`Server listening on port ${config.port}`))

module.exports = app
