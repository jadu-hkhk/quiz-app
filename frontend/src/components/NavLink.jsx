import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-gray-300 font-semibold transition duration-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
    >
        {children}
    </Link>
);

export default NavLink
