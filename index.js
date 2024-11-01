const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./config/db')
const userRoute = require('./routes/userRoute')
const projectRoute = require('./routes/projectRoute')

dotenv.config();
db();

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute);
app.use('/gigs', projectRoute);

app.listen(process.env.PORT, async (req, res) => {
   console.log('Server Running...')
})

module.exports = app