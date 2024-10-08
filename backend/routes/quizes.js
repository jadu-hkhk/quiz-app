const express = require('express');
const { getQuiz, createQuiz, getQuizes, deleteQuiz } = require('../controllers/quizController');

const router = express.Router();

router.get('/', getQuizes);

router.post('/', createQuiz);

router.get('/:id', getQuiz);

router.delete('/:id', deleteQuiz);

router.patch('/:id', (req, res) => {
    res.json({ msg: "UPDATE a single quiz" });
});


module.exports = router