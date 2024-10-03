const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

const router = require('./router');
app.use('/', router);

module.exports = app;