module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/mydb',
  // Add other configuration options here
}; 
2  set up environment variable(.env) fill
PORT=3000
MONGODB_URI=mongodb://localhost/mydb
SECRET_KEY=mysecretkey
