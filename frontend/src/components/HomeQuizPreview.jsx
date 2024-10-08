import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const HomeQuizPreview = ({ quiz }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 hover:bg-gray-700">
            <h3 className="text-xl font-semibold text-purple-400 mb-2 select-none">{quiz.quizTitle}</h3>
            <h4 className="text-sm text-gray-400 mb-4 select-none">Created At: {formatDistanceToNow(new Date(quiz.createdAt), { addSuffix: true })}</h4>
            <Link
                to={`/Quiz/${quiz._id}`}
                className="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                View Quiz
            </Link>
        </div>
    );
};

export default HomeQuizPreview;