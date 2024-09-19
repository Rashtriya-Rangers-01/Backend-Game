# Backend for Gamified Learning Platform - Question Management

## Overview

This repository contains the backend code for managing and querying the database to add and retrieve questions for various gamified learning features. Currently, it focuses on the backend support for the **Hangman Game**.

The database used is **MongoDB**, and this backend handles schema definitions, data management, and question queries for the game.

## Features

- Add new questions for the Hangman Game.
- Query existing questions from the database.
- MongoDB schema management for storing question-related data.

## Database - MongoDB

We use **MongoDB** as our primary database for storing questions. Each question entry for the Hangman Game includes the following fields:

- **game_name**: Specifies the game type, which for now is set to 'hangman'.
- **question**: The actual phrase or word that players must guess.
- **options**: An array of strings that serves as possible guesses or clues.
- **blankWords**: An array of strings representing the blanks in the Hangman puzzle, showing the positions to be filled.
- **difficulty**: The difficulty level of the question, categorized as `easy`, `medium`, or `hard`.
- **articleReferences**: References to specific articles of the Indian Constitution that are relevant to the question.
- **institution**: Indicates which branch of government the question pertains to (`Legislature`, `Executive`, or `Judiciary`).