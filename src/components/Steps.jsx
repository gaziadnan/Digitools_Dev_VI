import userIcon from "../assets/user.png";
import boxIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>

        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {/* Card 1 */}
          <div className="relative bg-white w-[320px] h-[320px] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-center items-center text-center px-6">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs w-9 h-9 flex items-center justify-center rounded-full">
              01
            </div>

            <div className="bg-purple-100 p-5 rounded-full">
              <img src={userIcon} alt="User" className="w-7 h-7" />
            </div>

            <h3 className="mt-5 text-lg font-semibold">Create Account</h3>

            <p className="text-sm text-gray-500 mt-2">
              Sign up for free in seconds. No credit card required.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white w-[320px] h-[320px] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-center items-center text-center px-6">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs w-9 h-9 flex items-center justify-center rounded-full">
              02
            </div>

            <div className="bg-purple-100 p-5 rounded-full">
              <img src={boxIcon} alt="Box" className="w-7 h-7" />
            </div>

            <h3 className="mt-5 text-lg font-semibold">Choose Products</h3>

            <p className="text-sm text-gray-500 mt-2">
              Browse our catalog and select tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white w-[320px] h-[320px] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-center items-center text-center px-6">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs w-9 h-9 flex items-center justify-center rounded-full">
              03
            </div>

            <div className="bg-purple-100 p-5 rounded-full">
              <img src={rocketIcon} alt="Rocket" className="w-7 h-7" />
            </div>

            <h3 className="mt-5 text-lg font-semibold">Start Creating</h3>

            <p className="text-sm text-gray-500 mt-2">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
