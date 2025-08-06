import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    { title: "Fruits" },
    { title: "Vegetables" },
    { title: "Electronics" },
    { title: "Clothing" },
    { title: "Books" },
    { title: "Toys" },
    { title: "Furniture" },
    { title: "Clothing" },
    { title: "Books" },
    { title: "Toys" },
    { title: "Furniture" },
    { title: "Clothing" }
];

const HomePage = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData && userData.role) {
            setRole(userData.role);
        }
    }, []);

    return (
        <div className="min-h-screen bg-orange-50 p-4 pl-15 pb-24">

            {role && (
                <h2 className="text-4xl font-bold text-center text-orange-700 mt-4">
                    Welcome, <span className="capitalize">{role}</span>!
                </h2>
            )}
            {/* Hero Section */}
            <div className="text-start mt-10 mb-20">
                <h1 className="text-5xl text-orange-800">Sell Your</h1>
                <p className="text-5xl font-bold text-orange-800 font-bold">Products Online 🛒</p>
                <p className="text-lg text-gray-700 mt-2">
                    Buy daily essentials & trendy products in one place — at mandi rates!
                </p>

                <button
                    onClick={() => navigate("/register")}
                    className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full shadow"
                >
                    Register Now 🛒
                </button>
            </div>

            {/* Categories */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow hover:shadow-md p-4 text-center cursor-pointer transition"
                    >
                        {/* <img src={cat.image} alt={cat.title} className="w-full h-32 object-cover rounded-md mb-2" /> */}
                        <h3 className="text-lg font-semibold text-gray-700">{cat.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
