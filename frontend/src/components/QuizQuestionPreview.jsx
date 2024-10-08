import React, { useState } from 'react';

const QuizQuestionPreview = ({ question, index }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedAnswer(option);
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 select-none">Question {index + 1}: {question.question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['a', 'b', 'c', 'd'].map((option) => (
                    <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`
                            w-full text-left bg-gray-700 p-4 rounded-md transition duration-300
                            ${selectedAnswer === option
                                ? 'bg-purple-600 text-white'
                                : 'hover:bg-gray-600'
                            }
                            focus:outline-none focus:ring-2 focus:ring-purple-500
                        `}
                    >
                        <span className="text-lg font-medium select-none">
                            <span className="text-purple-400 mr-2">{option.toUpperCase()}:</span>
                            {question.options[option]}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestionPreview;