import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className="bg-orange-50 shadow-md py-5 px-16 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-extrabold text-orange-600">
                <Link to="/">Mall Mandi</Link>
            </div>

            <nav className="space-x-6 hidden md:flex">
                {["/", "/about", "/services", "/contact"].map((path, i) => {
                    const labels = ["Home", "About", "Services", "Contact"];
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            className="text-gray-700 hover:text-orange-600 relative group font-medium"
                        >
                            {labels[i]}
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-orange-600 transition-all duration-300 ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                                    }`}
                            ></span>
                        </Link>
                    );
                })}
            </nav>

            <div className="relative w-full max-w-sm">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-40 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
            </div>
            <div className="space-x-3">
                {localStorage.getItem("token") ? (
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            navigate("/login");
                        }}
                        className="px-7 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md transition font-semibold"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="px-7 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 shadow-md transition font-semibold"
                    >
                        Login
                    </button>
                )}
                <button
                    onClick={() => navigate("/register")}
                    className="px-7 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 shadow-md transition font-semibold"
                >
                    Register
                </button>
            </div>
        </header>
    );
}

export default Header;
