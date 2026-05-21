
module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/mydb',
  // Add other configuration options here
}; 
2  set up environment variable(.env) fill
PORT=3000
MONGODB_URI=mongodb://localhost/mydb
SECRET_KEY=mysecretkey

## 3  create express app index.js and fill

const express = require('express');
const cors = require('cors');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api/example', exampleRoutes);


// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});