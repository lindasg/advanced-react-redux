// Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//db setup. database name is 'auth';
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// app setup
app.use(morgan('combined'));   //morgan is login framework for debuging;
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));   //parse any income request as json regardless of format;

router(app);

////define and use a error handling middleware. only execute when next is called in routes(app);
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message});
})

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listensing on: ${port}`);
