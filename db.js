var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ParkUF');

module.exports = mongoose.connection;