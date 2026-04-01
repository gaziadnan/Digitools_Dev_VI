const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-10">
      
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-3 text-center text-white items-center">
          
          {/* Item 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
            <p className="text-sm mt-1 opacity-80">Active Users</p>
          </div>

          {/* Item 2 */}
          <div className="border-x border-white/30">
            <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
            <p className="text-sm mt-1 opacity-80">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
            <p className="text-sm mt-1 opacity-80">Rating</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Stats;