const express = require('express')
const mongoose = require('mongoose');

//creating the dtatbase connection
mongoose.connect()

const app = express();
const PORT = process.env.PORT || 5000;