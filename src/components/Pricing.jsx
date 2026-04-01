const Pricing = () => {
  return (
    <div className="bg-gray-50 py-[80px] md:py-[120px]">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight md:leading-[58px]">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Starter */}
          <div className="bg-white w-full p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between text-left hover:shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div>
              <h3 className="font-semibold text-lg">Starter</h3>

              <p className="text-sm text-gray-500">Perfect for getting started</p>

              <h2 className="text-4xl font-bold mt-4">
                $0<span className="text-base text-gray-500"> /Month</span>
              </h2>

              <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                <li>✔ Access to 10 free tools</li>
                <li>✔ Basic templates</li>
                <li>✔ Community support</li>
                <li>✔ 1 project per month</li>
              </ul>
            </div>

            <button className="w-full py-3 mt-6 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-medium">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-full p-8 rounded-xl shadow-md flex flex-col justify-between text-left hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-200 text-orange-700 text-xs px-4 py-1 rounded-full font-medium">
              Most Popular
            </div>

            <div>
              <h3 className="font-semibold text-lg">Pro</h3>

              <p className="text-sm opacity-80">Best for professionals</p>

              <h2 className="text-4xl font-bold mt-4">
                $29<span className="text-base"> /Month</span>
              </h2>

              <ul className="mt-6 space-y-2 text-sm">
                <li>✔ Access to all premium tools</li>
                <li>✔ Unlimited templates</li>
                <li>✔ Priority support</li>
                <li>✔ Unlimited projects</li>
                <li>✔ Cloud sync</li>
                <li>✔ Advanced analytics</li>
              </ul>
            </div>

            <button className="w-full py-3 mt-6 rounded-full bg-white text-purple-600 font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white w-full p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between text-left hover:shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div>
              <h3 className="font-semibold text-lg">Enterprise</h3>

              <p className="text-sm text-gray-500">For teams and businesses</p>

              <h2 className="text-4xl font-bold mt-4">
                $99<span className="text-base text-gray-500"> /Month</span>
              </h2>

              <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                <li>✔ Everything in Pro</li>
                <li>✔ Team collaboration</li>
                <li>✔ Custom integrations</li>
                <li>✔ Dedicated support</li>
                <li>✔ SLA guarantee</li>
                <li>✔ Custom branding</li>
              </ul>
            </div>

            <button className="w-full py-3 mt-6 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white font-medium">
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Pricing;