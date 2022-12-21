const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require('../model/Book');

// Add book

bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
});

// Get all Book
bookRoute.route('/').get((req, res) => {
    Book.find((err, data) => {
        if (err) 
         {
            return next(err)
        } else {
            res.json(data)
        }
    })
});

// Get Book
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
});

// Update Book
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err,data) => {
        if (err) {
            return next(err);
            console.log(err);
        } else {
            res.json(data)
            console.log('Book updated Successfully');
        }
    } )
})

// Delete book
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(rew.params/id, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    } )
})

module.exports = bookRoute
























