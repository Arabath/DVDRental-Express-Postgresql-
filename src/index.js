import express from 'express';
import { PORT } from './config.js';
import  dvdRentalRoutes from './routes/dvdRentalRoutes.routes.js';
const app = express();

//import db from './db.js';

// app.get('/', async (req, res) => {
//     try {
//       const result = await db.query('SELECT * FROM actor');
//       res.json(result.rows);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

app.use(dvdRentalRoutes);

app.listen(PORT);
console.log("Server on port", PORT);