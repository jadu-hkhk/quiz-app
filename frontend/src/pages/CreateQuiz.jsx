import { useState } from 'react';
import Question from '../components/Question';
import AddQuestionForm from '../components/AddQuestionForm';

const CreateQuiz = () => {
    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);

    const handleQuizCreate = async (e) => {
        e.preventDefault();

        const quiz = {
            author: "unknown",
            quizTitle,
            questions
        };

        const response = await fetch('http://localhost:3000/api/quizes/', {
            method: 'POST',
            body: JSON.stringify(quiz),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setQuizTitle('');
            setQuestions([]);
            setError(null);
            console.log("new quiz added", json);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen py-10 px-6 text-gray-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-400 select-none">Create Quiz</h2>

                <div className="mb-6">
                    <label htmlFor="quizTitle" className="block text-lg font-medium text-purple-300 select-none">Quiz Title:</label>
                    <input
                        id="quizTitle"
                        type="text"
                        className="mt-1 p-3 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        onChange={(e) => setQuizTitle(e.target.value)}
                        value={quizTitle}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-purple-400 mb-4 select-none">Questions</h3>
                            <div className="space-y-4">
                                {questions.length > 0 ? (
                                    questions.map((question, index) => (
                                        <Question question={question} key={index} />
                                    ))
                                ) : (
                                    <p className="text-gray-400 select-none">No questions added yet.</p>
                                )}
                            </div>
                        </div>

                        <form onSubmit={handleQuizCreate} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <button className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                CREATE QUIZ
                            </button>
                            {error && <p className="text-red-400 mt-4 select-none">{error}</p>}
                        </form>
                    </div>

                    <div className="lg:col-span-1">
                        <AddQuestionForm questions={questions} setQuestions={setQuestions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;