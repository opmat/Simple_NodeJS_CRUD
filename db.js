const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
    const connectstr = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
     mongoose.connect(connectstr)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()