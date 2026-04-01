const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-[100px] text-center text-white">
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-sm md:text-base opacity-90">
          Join thousands of professionals who are already using DigiTools to work smarter. <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          
          {/* Solid Button */}
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Explore Products
          </button>

          {/* Outline Button */}
          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTA;