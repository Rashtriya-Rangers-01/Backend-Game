const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const HangmanQuestionSchema = new mongoose.Schema({
    game_name: {
        type: String,
        enum:['hangman'],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    blankWords: {
        type: [String],
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    articleReferences: {
        type: [String],
        required: true
    },
    institution: {
        type: String,
        enum: ['Legislature', 'Executive', 'Judiciary'],
        required: true
    }
}, { collection: 'games' });

const Hangman = mongoose.model('HangmanQuestion', HangmanQuestionSchema);

module.exports = Hangman;
