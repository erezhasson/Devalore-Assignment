const express = require('express')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes/appRoutes')
const dotenv = require('dotenv');
const expressValidator = require('express-validator')
const mongoose = require('mongoose')

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan("dev"));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', appRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server listening on port ${port}...`));