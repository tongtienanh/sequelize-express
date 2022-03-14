const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
var bodyParser = require('body-parser')
const app = express()
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/uploads/image'));
app.use(express.static('uploads'))
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.use(cors())
const loginRouter = require('./routes/login')
const user = require('./routes/userRouter')
const songRouter = require('./routes/songRouter')
app.use('/uploads', express.static('uploads'))
app.use('/login',loginRouter)
app.use('/user',user)
app.use('/song',songRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})