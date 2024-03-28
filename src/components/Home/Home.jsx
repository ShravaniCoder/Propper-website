import Background from "../../img/gallery-02.jpg";
import { FaArrowRight } from "react-icons/fa";
import Background2 from "../../img/bg-01.jpg";
import Image1 from "../../img/icon-white-shield.png";
import Image2 from "../../img/icon-white-pin.png";
import Image3 from "../../img/icon-white-wallet.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src={Background}
          alt="background-img"
        />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />

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
                className="p-1 min-w-[250px] sm:min-w-[400px] lg:min-w-[350px] lg:block mt-4"
              />
              <button className="mt-4">
                <FaArrowRight className="bg-white text-black text-xl pr-1 justify-center lg:min-w-4 min-h-9 lg:block" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={Background2}
          alt="Background2"
          className="h-64 w-full bg-black/50 bg-opacity-70 object-cover"
        />
        <div className="bg-black bg-opacity-70 absolute inset-0" />

        <div className="absolute top-10 left-0 right-0 lg:flex lg:justify-between bg-black/90 lg:px-[200px]">
          <div className="flex-col items-center mr-15 sm:z-10">
            <img
              src={Image1}
              alt="Shield"
              className="w-15 h-15 mr-4 absolute"
            />
            <h1 className="text-white font-bold text-lg mb-4 mt-9 ml-6 lg:ml-14">
              Modern & Safe Living
            </h1>
            <h5 className="text-gray-400 font-bold text-xs ml-6 lg:ml-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Mauris ac ornare felis. Nam velit neque, blandit id placerat
            </h5>
            <button className="bg-white text-black p-2 items-center mt-4 rounded-full text-xs font-medium flex ml-6 lg:ml-14">
              READ MORE
              <FaArrowRight className="ml-2 font-xl font-light" />
            </button>
          </div>

          <div className="flex-col items-center mr-15">
            <img src={Image2} alt="Pin" className="w-15 h-15 mr-4 absolute" />
            <h1 className="text-white font-bold text-lg mb-4 mt-9 ml-6 lg:ml-14">
              Modern & Safe Living
            </h1>
            <h5 className="text-gray-400 font-bold text-xs ml-6 lg:ml-14">
              Mauris ac ornare felis. Nam velit neque, blandit id <br />{" "}
              placerat eu, venenatis at purus. Nunc maximus ultrices lacus
            </h5>
            <button className="bg-white text-black items-center p-2 mt-4 rounded-full text-xs font-medium flex ml-6 lg:ml-14">
              READ MORE
              <FaArrowRight className="ml-2 font-xl font-light" />
            </button>
          </div>
          <div className="flex-col items-center">
            <img src={Image3} alt="Wallet" className="w-15 h-15 absolute" />
            <h1 className="text-white font-bold text-lg mb-4 mt-9 ml-6 lg:ml-14">
              Modern & Safe Living
            </h1>
            <h5 className="text-gray-400 font-bold text-xs ml-6 lg:ml-14">
              Nam velit neque, blandit id placerat eu, venenatis at <br />{" "}
              purus. Nunc maximus ultrices lacus eu fringilla.
            </h5>
            <button className="bg-white text-black items-center p-2 mt-5 ml-6 lg:ml-14 rounded-full text-xs font-medium flex">
              READ MORE
              <FaArrowRight className="ml-2 font-xl font-light" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

