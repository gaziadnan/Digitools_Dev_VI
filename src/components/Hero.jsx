import demoIcon from "../assets/Play.png";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left */}
        <div className="text-center md:text-left">

          {/* Badge */}
          <div className="flex items-center justify-center md:justify-start gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full w-fit text-sm mx-auto md:mx-0">
            
            {/* Smooth Animated Dot */}
            <span className="w-2.5 h-2.5 bg-purple-600 rounded-full smooth-pulse"></span>

            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-6 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software - all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            
            {/* Gradient Button */}
            <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Explore Products
            </button>

            {/* Watch Demo */}
            <button className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition">
              <img src={demoIcon} alt="demo" className="w-4 h-4" />
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="AI Hand"
            className="rounded-xl shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;