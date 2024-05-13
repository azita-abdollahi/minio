const express = require('express');
require('dotenv').config();
const cors = require("cors");
const morgan = require("morgan");
const fileServerRouter = require('./routes/fileserver.router');
const Response = require('./utils/response/index');

const {
  NotFoundException,
  SchemaValidationException,
  ForbiddenException,
  DuplicateException,
  TimeoutException
} = require('./utils/appError');

const app = express();

const corsOption = {
    origin: process.env.origin,
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  };
app.use(express.json({ limit: '70mb' }));
app.use(express.urlencoded({ limit: '70mb', extended: true}));
app.use(cors(corsOption));
app.use(morgan('dev'));

const port = process.env.PORT | 3000;

app.get('/healthChecker', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Welcome to file server😉',
    });
  });

app.use('/api/file', fileServerRouter);

app.use((err, req, res, next) => {
  let response; 
  console.log({err});
  if (err instanceof NotFoundException) {
    response = new Response(false, null, err.message);
    res.status(404).json(response);
  } else if (err instanceof SchemaValidationException) {
    response = new Response(false, null, err.message);
    res.status(400).json(response);
  } else if (err instanceof ForbiddenException) {
    response = new Response(false, null, err.message);
    res.status(403).json(response);
  } else if (err instanceof DuplicateException) {
    response = new Response(false, null, err.message);
    res.status(409).json(response);                                                  
  } else if (err instanceof TimeoutException) {
    response = new Response(false, null, err.message);
    res.status(504).json(response);
  } else {
    response = new Response(false, null, err.message);
    res.status(500).json(response);
  }
});

app.listen(port, () => {
    console.log(`Server Listen On http://localhost:${port}`);
}) 