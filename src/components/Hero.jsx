import demoIcon from "../assets/Play.png"; // 👈 তোর icon path
import banner from "../assets/banner.png";
const Hero = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left */}
        <div>

          {/* Badge */}
          <div className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full w-fit text-sm">
            
            {/* Circle Dot */}
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>

            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-gray-800 mt-6 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software - all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            
            {/* Gradient Button */}
            <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-3 rounded-full">
              Explore Products
            </button>

            {/* Watch Demo */}
            <button className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100">
              
              <img src={demoIcon} alt="demo" className="w-4 h-4" />

              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div>
         <img src={banner} alt="AI Hand" className="rounded-xl shadow-md" />
        </div>

      </div>
    </div>
  );
};

export default Hero;