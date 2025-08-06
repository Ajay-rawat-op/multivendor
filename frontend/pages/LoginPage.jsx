import { useState  } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert(`Logged in as ${res.data.role}`);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">Login to Your Account</h2>

        <form onSubmit={loginUser} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              placeholder="Name@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter at least 6 characters"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-orange-500 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="text-right mt-1">
              <a href="/forgot-password" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

        
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-white font-semibold transition duration-200"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-orange-600 hover:underline font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
