import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = ({ setView }) => {
  const { cart } = useCart();

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <div
            onClick={() => setView("cart")}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />

            {/* Count */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <button>Login</button>

          <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;