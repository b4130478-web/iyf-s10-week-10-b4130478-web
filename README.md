# iyf-s10-week-10-b4130478-web
## author:
-**name**-benard mwangi wambui
-**date**9 may 2026
## description
backend express app
## technologies
-javascripts
- and etc
## how to run
-1 clone this repository 
-2 npm start
## 1  create config.js and fill these code

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

## 4  create routes example routes.js fill

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define your routes
router.get('/', exampleController.getExamples);
router.post('/', exampleController.createExample);
// Add more routes as needed

module.exports = router;

## 5 create controllers example controller.js
and fill these

// Import any required services or models here
const exampleService = require('../services/exampleService');

// Define your controller methods
exports.getExamples = async (req, res) => {
  try {
    const examples = await exampleService.getExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createExample = async (req, res) => {
  try {
    const { name } = req.body;
    const newExample = await exampleService.createExample(name);
    res.json(newExample);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
## 6  create services exampleservices.js
and fill

// Import any required models here
const Example = require('../models/example');

// Define your service methods
exports.getExamples = async () => {
  return await Example.find();

};
## 7 run the application with nodemon
add the following to your package.json
 "scripts": {
  "start": "nodemon src/index.js"
}
## now you can start the application with 

npm start

