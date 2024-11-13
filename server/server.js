const express = require('express')
const mongoose = require('mongoose');

//creating the dtatbase connection
mongoose.connect(mongodb+srv://sarobaridoo:<db_password>@cluster0.cpwvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)

const app = express();
const PORT = process.env.PORT || 5000;