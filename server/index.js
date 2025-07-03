import express from 'express';
import cors from 'cors';
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'

const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes.js'); // Import your auth routes

const app = express();

app.use(cors()); 

app.use(express.urlencoded({ extended: true }));
 // To parse URL-encoded bodies in requests
app.use(express.json());  // To parse JSON bodies in requests
        
app.use('/api', authRoues);
// Add your route handlers here, Example:
// app.use('/your-endpoint', yourRoute)

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});