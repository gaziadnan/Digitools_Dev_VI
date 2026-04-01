import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Steps from "./components/Steps"
import Pricing from "./components/Pricing"
import ProductsSection from "./components/ProductsSection";

// Context
import { CartProvider } from "./context/CartContext";

function App() {
  // Toggle state (Products / Cart)
  const [view, setView] = useState("products");

  return (
    <CartProvider>
      {/* Navbar */}
      <Navbar setView={setView} />

      {/* Main Content */}
      <div className="pt-20">

        <Hero />
        <Stats />

        {/* Products + Cart Section */}
        <ProductsSection view={view} setView={setView} />
        <Steps />
        <Pricing/>

        
      </div>
    </CartProvider>
  );
}

export default App;