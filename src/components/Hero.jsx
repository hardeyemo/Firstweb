import heropic from "../assets/blog.jpg";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col relative px-4 sm:px-6 md:px-8 mt-7">
        <div className="flex flex-col items-center gap-3 text-center mt-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 animate-pulse">
            BLOG
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-lg sm:max-w-xl">
            Welcome to our blog! Explore insights and stories that inspire creativity and growth.
          </p>
        </div>
        <img
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover mt-8 rounded-lg shadow-lg"
          src={heropic}
          alt="Hero background"
        />
      </div>
    </div>
  );
};

export default Hero;
