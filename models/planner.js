const mongoose = require('./connection')
const { Schema, model } = mongoose;

const plannerSchema = new Schema (
    {
        todo: String,
        notes: String,
        todoDone: Boolean,
        date: Date
    },
    {
        timestamps: true
    }
)

const Plans = model("Plans", plannerSchema)

module.exports = Plans