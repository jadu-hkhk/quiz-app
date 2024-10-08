const mongoose = require('mongoose');

const Schema = mongoose.Schema

const quizSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    quizTitle: {
        type: String,
        required: true
    },
    questions: [
        {
            question: {
                type: String,
                required: true
            },
            options: {
                a: {
                    type: String,
                    required: true
                },
                b: {
                    type: String,
                    required: true
                },
                c: {
                    type: String,
                    required: false
                },
                d: {
                    type: String,
                    required: false
                }
            },
            correctAnswer: {
                type: String,
                enum: ["a", "b", "c", "d"],
                required: true
            }
        }
    ]

}, { timestamps: true })


module.exports = mongoose.model('Quiz', quizSchema)