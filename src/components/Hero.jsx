import rec from "../assets/blog.webp";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col relative">
      <div className="flex flex-col items-center gap-3 text-center mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
          React & Node
        </h1>
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          BLOG
        </h1>
      </div>
      <img className="w-full h-[70vh] object-cover mt-8 rounded-lg shadow-lg" src={rec} alt="Hero background"/>
    </div>
  );
};

export default Hero;
