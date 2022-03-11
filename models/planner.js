const mongoose = require('mongoose')

const plannerSchema = new mongoose.Schema (
    {
        todo: String,
        notes: String
    },
    {
        timestamps: true
    }
)

const Plans = mongoose.model('Plans', plannerSchema)

module.exports = Plans