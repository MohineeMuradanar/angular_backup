const mongoose = require('mongoose');
const Schema = mongoose.mongoose.Schema;

// Define collection and schema for product

let Product = new Schema({
    ProductName: {
        type: String
    },
    ProductDescription: {
        type: String
    },
    ProductPrice: {
        Number
    }
},
    {
        collection: 'Product'
    });
    module.exports= mongoose.model('Product',Product);