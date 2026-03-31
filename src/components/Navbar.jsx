import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon */}
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700" />

          <button className="text-gray-700 font-medium">
            Login
          </button>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;