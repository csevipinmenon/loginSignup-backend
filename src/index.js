const express = require('express')

const app = express()
const cors = require('cors')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./routes/AuthRouter')
const productsRouter = require('./routes/ProductsRouter')
const bodyParser = require('body-parser') // parse incoming request bodies in a middleware before your handlers, available under 


const PORT = process.env.PORT || 3000

app.use(bodyParser.json()) // parse application/json
app.use(cors())

app.use('/auth',AuthRouter)

app.use('/products',productsRouter)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `);
    
})