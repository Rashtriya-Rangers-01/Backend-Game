const express = require('express');
const Hangman = require('../db');
const router = express.Router()


router.post('/hangman', async (req, res) => {
    try {
        const { game_name, question, options, blankWords, difficulty, articleReferences, institution } = req.body;

        if (!game_name || !question || !options || !blankWords || !difficulty || !articleReferences || !institution) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        const newQuestion = await Hangman.create({
            game_name, question, options, blankWords, difficulty, articleReferences, institution
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

module.exports = router;
