const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    location: String,
    date: String,
    slots: String,
    fee: Number
}
)

const bookModel = mongoose.model("book", bookSchema)

module.exports = { bookModel };