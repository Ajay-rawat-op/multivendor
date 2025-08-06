
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaStore, FaUserShield } from 'react-icons/fa';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'vendor',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setMessage(err.response?.data?.error || 'Registration failed');
    }
  };

  const roleOptions = [
    { label: 'User', value: 'user', icon: <FaUser /> },
    { label: 'Vendor', value: 'vendor', icon: <FaStore /> },
    { label: 'Admin', value: 'admin', icon: <FaUserShield /> },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-orange-500">Create Account</h2>

        {/* Error Message */}
        {message && (
          <div className="text-red-600 bg-red-100 border border-red-300 p-2 rounded text-sm text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Name@gmail.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter at least 6 characters"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-orange-500 text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Role Selection as Buttons */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Select Role</label>
            <div className="flex justify-between gap-2">
              {roleOptions.map((roleOption) => (
                <button
                  type="button"
                  key={roleOption.value}
                  onClick={() => setForm({ ...form, role: roleOption.value })}
                  className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-md text-sm font-medium border transition ${form.role === roleOption.value
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-100'
                    }`}
                >
                  {roleOption.icon}
                  {roleOption.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded-md hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            Register as {form.role.charAt(0).toUpperCase() + form.role.slice(1)}
          </button>
        </form>

        <div className="pt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <button
              onClick={() => navigate('/login')}
              className="ml-2 text-orange-600 hover:underline font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
