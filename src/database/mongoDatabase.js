const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/hotels')
.then(db => console.log("DB in Use"))
.catch(err => console.log("error: " + err))

module.exports = mongoose