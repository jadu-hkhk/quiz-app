import { useState } from "react";

const AddQuestionForm = ({ questions, setQuestions }) => {
    const [question, setQuestion] = useState({
        question: '',
        options: { a: '', b: '', c: '', d: '' },
        correctAnswer: ''
    });

    const handleOptionChange = (e) => {
        setQuestion({
            ...question,
            correctAnswer: e.target.value
        });
    };

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        setQuestions([...questions, question]);
        setQuestion({ question: '', options: { a: '', b: '', c: '', d: '' }, correctAnswer: '' });
    };

    return (
        <form onSubmit={handleQuestionSubmit} className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="mb-4">
                <label htmlFor="questionText" className="block text-purple-300 font-medium mb-2 select-none">Question:</label>
                <input
                    id="questionText"
                    type="text"
                    className="p-3 block w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                    value={question.question}
                />
            </div>

            {['a', 'b', 'c', 'd'].map((option) => (
                <div className="mb-4" key={option}>
                    <label htmlFor={`option${option}`} className="block text-purple-300 font-medium mb-2 select-none">{option.toUpperCase()}:</label>
                    <input
                        id={`option${option}`}
                        type="text"
                        className="p-3 block w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e) => setQuestion({ ...question, options: { ...question.options, [option]: e.target.value } })}
                        value={question.options[option]}
                    />
                </div>
            ))}

            <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-300 select-none">Correct Answer:</h3>
                <div className="mt-2">
                    {['a', 'b', 'c', 'd'].map((option) => (
                        <label key={option} className="inline-flex items-center mr-4 select-none">
                            <input
                                type="radio"
                                className="form-radio h-4 w-4 text-purple-500 focus:ring-2 focus:ring-purple-500"
                                value={option}
                                checked={question.correctAnswer === option}
                                onChange={handleOptionChange}
                            />
                            <span className="ml-2 text-gray-300">{option.toUpperCase()}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">Add Question</button>
        </form>
    );
};

export default AddQuestionForm;