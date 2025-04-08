const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDB = require('./config/db')
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
dotenv.config();
const Port = process.env.Port ;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get ("/health",(req, res)=>{
  res.send("Server is running!")
})
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen (Port, async() => {
  await mongoDB();
  console.log("Server is Running!")
})
