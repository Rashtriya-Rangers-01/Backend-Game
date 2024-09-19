const express = require('express');
const Hangman = require('./db');
const app = express();
app.use(express.json());

app.post('/game/hangman', async (req, res) => {
    try {
        const { question, options, blankWords, difficulty, articleReferences, institution } = req.body;

        if (!question || !options || !blankWords || !difficulty || !articleReferences || !institution) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        const newQuestion = await Hangman.create({
            question, options, blankWords, difficulty, articleReferences, institution
        });

        res.status(201).json({
            message: "Question created successfully",
            question: newQuestion
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to create question.",
            error: err.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
