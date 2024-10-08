import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestionPreview from '../components/QuizQuestionPreview';

const Quiz = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/quizes/${id}`);
                const json = await response.json();
                setQuiz(json);
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuiz();
    }, [id]);

    if (loading) {
        return <div className="text-center text-purple-200 text-bold text-2xl bg-gray-900 min-h-screen pt-10">Loading...</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen py-10 px-6 text-gray-300">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-400 select-none">Quiz: {quiz.quizTitle}</h2>
                <div className="space-y-6">
                    {quiz.questions.map((question, index) => (
                        <QuizQuestionPreview key={index + question.question} question={question} index={index} />
                    ))}
                </div>
                <h4 className="mt-8 text-right text-lg text-purple-300 select-none">Author: {quiz.author}</h4>
            </div>
        </div>
    );
};

export default Quiz;