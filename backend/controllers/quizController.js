const mongoose = require('mongoose');
const Quiz = require('../models/quizModel')

//get all quizes
const getQuizes = async (req, res) => {
    const quizes = await Quiz.find({}).sort({ createdAt: -1 })

    res.status(200).json(quizes)
}


//get a single quiz
const getQuiz = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such quiz exist' })
    }

    const quiz = await Quiz.findOne({ _id: id })

    if (!quiz) {
        return res.status(404).json({ error: 'No such quiz exist' })
    }

    res.status(200).json(quiz)
}


// create a quiz
const createQuiz = async (req, res) => {
    const { author, quizTitle, questions } = req.body
    try {
        const quiz = await Quiz.create({ author, quizTitle, questions })
        res.status(200).json({ quiz })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a quiz
const deleteQuiz = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such quiz exist' })
    }

    const quiz = await Quiz.findOneAndDelete({ _id: id })

    if (!quiz) {
        return res.status(404).json({ error: 'No such quiz exist' })
    }

    res.status(200).json(quiz)
}

//update a quiz

module.exports = {
    getQuiz,
    createQuiz,
    getQuizes,
    deleteQuiz
}