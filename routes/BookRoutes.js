const express = require("express");
const { bookModel } = require("../models/BookModel");
const bookRouter = express.Router();

bookRouter.post("/appointments", async (req, res) => {
    const payload = req.body;
    try {
        const newBook = new bookModel(payload);
        await newBook.save();
        res.send({ "msg": "Appointment Booked" })
    }
    catch (err) {
        console.log(err);
        res.send(err.message);
    }
})

bookRouter.get("/", async (req, res) => {
    try {
        const book = await bookModel.find();
        res.send(book);
    }
    catch (err) {
        console.log(err);
        res.send(err.message);
    }
});


module.exports = { bookRouter };