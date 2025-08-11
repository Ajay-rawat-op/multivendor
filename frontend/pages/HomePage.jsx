import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Sample category images (replace with your own URLs or assets)
const categories = [
  { title: "Fruits", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2" },
  { title: "Vegetables", image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg" },
  { title: "Electronics", image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144" },
  { title: "Clothing", image: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
  { title: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { title: "Toys", image: "https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg" },
  { title: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" }
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
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/15054264/pexels-photo-15054264.jpeg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4"
        >
          {role && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome, <span className="capitalize">{role}</span>!
            </h2>
          )}
          <h1 className="text-4xl md:text-6xl font-bold">Sell Your Products Online 🛒</h1>
          <p className="mt-3 text-lg max-w-xl mx-auto">
            Buy daily essentials & trendy products in one place — at mandi rates!
          </p>
          <button
            onClick={() => navigate("/register")}
            className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Register Now 
          </button>
        </motion.div>
      </div>

      {/* Categories */}
      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold text-gray-700">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
