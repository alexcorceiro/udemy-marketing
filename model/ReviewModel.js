const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    comment: {type: String, required: true},
    rating: {type: String, reqquied: true},
    user: {
        _id: {type: mongoose.Schema.Types.ObjectId, required: true},
        name: {type: String, required: true}
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Review", reviewSchema);