import { Link } from "react-router-dom";
import { NavLink } from '../components/NavLink';

const Navbar = () => {
    return (
        <header className="bg-gray-900 shadow-lg border-b border-gray-800">
            <div className="max-w-[100rem] mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded">
                    <h1 className="text-3xl font-bold text-purple-400 transition duration-300 hover:text-purple-300 select-none hover:animate-pulse">
                        Quizify
                    </h1>
                </Link>
                <nav className="flex space-x-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/createQuiz">Create Quiz</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;