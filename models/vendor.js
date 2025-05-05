const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    city: String,
    image: String
});

module.exports = mongoose.model('Vendor', vendorSchema);