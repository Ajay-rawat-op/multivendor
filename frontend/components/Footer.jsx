const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-orange-400 mb-3">
              Mall Mandi 🛒
            </h2>
            
            <p className="text-gray-400 text-sm">
              Sabzi, kirana, kapde, electronics – sab kuch ek hi jagah! <br />
              Mall Mandi - Desi Shopping ka Digital Bazaar!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shops</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Sabzi Mandi</a></li>
              <li><a href="#" className="hover:text-white">Kirana Bazaar</a></li>
              <li><a href="#" className="hover:text-white">Fashion Gully</a></li>
              <li><a href="#" className="hover:text-white">Electronics</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">
              Subscribe
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Naye offers aur deals paane ke liye subscribe karein:
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-l bg-white text-black"
              />
              <button
                type="submit"
                className="bg-orange-400 px-4 py-2 rounded-r text-black font-semibold hover:bg-orange-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
          © 2025 Mall Mandi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
