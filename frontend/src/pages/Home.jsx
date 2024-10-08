import { useEffect, useState } from "react";
import HomeQuizPreview from "../components/HomeQuizPreview";

const Home = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/quizes');
                if (!response.ok) {
                    throw new Error('Failed to fetch quizzes');
                }
                const json = await response.json();
                setQuizzes(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizzes();
    }, []);

    if (loading) {
        return <div className="text-center text-purple-200 text-bold text-2xl bg-gray-900 min-h-screen pt-10">Loading...</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen py-10 px-6 text-gray-300">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-400 select-none">Available Quizzes</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {quizzes.map((quiz) => (
                        <HomeQuizPreview key={quiz._id} quiz={quiz} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;