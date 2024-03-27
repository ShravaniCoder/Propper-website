import Background from "../../assets/gallery-big-02.jpg"
import { FaArrowRight } from "react-icons/fa";


export default function Home() {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={Background}
        alt="background-img"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%]  max-w-[1100px] m-auto absolute p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Get Ready.
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            We are finishing!
          </h1>
          <p className="text-sm font-bold mt-2">
            Enter your email for the latest news
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Email"
              className="p-1 min-w-[300px] sm:min-w-[400px] lg:min-w-[350px] lg:block mt-4"
            />
            <button className="mt-4">
              <FaArrowRight className="bg-white text-black text-xl pr-1 justify-center lg:min-w-4 min-h-9 lg:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}