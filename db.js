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
        required: true,
        validate: {
            validator: function(v) {
                return v.length === 8;
            },
            message: props => `Options array must contain exactly 8 items, but got ${props.value.length}.`
        }
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
        type: [Number],
        required: true
    },
    institution: {
        type: String,
        enum: ['legislature', 'executive', 'judiciary'],
        required: true
    }
}, { collection: 'games' });

const Hangman = mongoose.model('HangmanQuestion', HangmanQuestionSchema);

module.exports = Hangman;
