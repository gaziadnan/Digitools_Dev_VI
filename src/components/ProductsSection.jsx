import { useState } from "react";
import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";

const ProductsSection = ({ view, setView }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [clickedId, setClickedId] = useState(null);

  // Add (2 sec button effect)
  const handleAdd = (product) => {
    addToCart(product);

    setClickedId(product.id);
    setTimeout(() => {
      setClickedId(null);
    }, 2000);
  };

  // Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center">
          Premium Digital Tools
        </h2>

    <p className="text-center text-gray-500 mt-2 max-w-xl mx-auto">
  Choose from our curated collection of premium digital products designed 
  to boost your productivity and creativity.
</p>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full ${
              view === "products"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-gray-200"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full ${
              view === "cart"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-gray-200"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* ================= PRODUCTS ================= */}
        {view === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white w-full max-w-[380px] h-[414px] mx-auto p-5 rounded-xl shadow-sm border border-white hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl">{product.icon}</div>

                  <span
                    className={`text-xs px-2 py-[2px] rounded-full font-medium
                    ${
                      product.tagType === "orange"
                        ? "bg-orange-100 text-orange-600"
                        : product.tagType === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-1">
                  {product.description}
                </p>

                {/* Price */}
                <p className="mt-2 text-xl font-bold">
                  ${product.price}
                  <span className="text-sm text-gray-500 font-normal ml-1">
                    /{product.period}
                  </span>
                </p>

                {/* Features */}
                <ul className="text-sm mt-3 space-y-1 text-gray-600">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 text-xs">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleAdd(product)}
                  className={`w-full mt-4 py-2 rounded-full font-medium transition
                  ${
                    clickedId === product.id
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                  }`}
                >
                  {clickedId === product.id ? "Added to Cart" : "Buy Now"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* ================= CART ================= */
          <div className="mt-10 max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-sm border">

            <h3 className="font-semibold text-lg mb-4">
              Your Cart
            </h3>

            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-10">
                🛒 Your cart is empty
              </p>
            ) : (
              <>
                {/* Items */}
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-xl">{item.icon}</div>

                        <div>
                          <p className="text-sm font-medium">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-500">
                    Total:
                  </span>
                  <span className="font-semibold text-lg">
                    ${total}
                  </span>
                </div>

                {/* Checkout */}
                <button
                  onClick={clearCart}
                  className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                >
                  Proceed To Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;