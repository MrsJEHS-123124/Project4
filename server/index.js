
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'
import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import scriptureRoutes from './Routes/scriptureRoutes.js';


const app = express();

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', scriptureRoutes);

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});