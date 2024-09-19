const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://websitepurpose087:Sourabhh%40123@cluster0.x8sjxlz.mongodb.net/Constitution?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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
