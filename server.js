const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
var bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
const router = require('./routes/productRouter')
const loginRouter = require('./routes/login')
app.use('/api/product',router)
app.use('/login',loginRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})