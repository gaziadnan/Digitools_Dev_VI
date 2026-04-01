import youtubeIcon from "../assets/icons8-instagram-logo-60.png";
import facebookIcon from "../assets/icons8-facebook-logo-60.png";
import twitterIcon from "../assets/icons8-x-logo-60.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C2E] text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

        {/* Left */}
        <div className="lg:col-span-2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">DigiTools</h1>
          <p className="mt-6 text-sm max-w-xs mx-auto md:mx-0">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Social Links</h3>

          <div className="flex justify-center md:justify-start gap-3">
            <div className="bg-white p-2 rounded-full hover:scale-110 transition cursor-pointer">
              <img src={youtubeIcon} alt="Instagram" className="w-4 h-4" />
            </div>

            <div className="bg-white p-2 rounded-full hover:scale-110 transition cursor-pointer">
              <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
            </div>

            <div className="bg-white p-2 rounded-full hover:scale-110 transition cursor-pointer">
              <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p className="text-center md:text-left">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;