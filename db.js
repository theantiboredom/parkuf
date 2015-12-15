var mongoose = require('mongoose');

mongoose.connect('mongodb://main:moasdf123@ec2-52-23-224-82.compute-1.amazonaws.com:27017/dummyDB');

module.exports = mongoose.connection;
