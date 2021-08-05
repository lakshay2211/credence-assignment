const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    image:String,
    summary: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
