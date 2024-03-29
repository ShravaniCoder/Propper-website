import { useState } from "react";
import bgImg from "../../img/gallery-big-01.jpg";



const Pricing = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleShow = () => {
    setShow(!show);
    setShow2(false);
    setShow1(false);
  };

  const handleShow1 = () => {
    setShow1(!show1);
    setShow2(false);
    setShow(false);
  };

  const handleShow2 = () => {
    setShow2(!show2);
    setShow1(false);
    setShow(false);
  };
  
  

  return (
    <div className="p-2">
      <div className="lg:px-[180px] px-2 py-2 lg:py-[80px]">
        <h1 className="text-3xl font-semibold">Pricing.</h1>
        <div className="lg:flex justify-between mt-10">
          <div className="mt-5 p-2">
            <h1 className="text-2xl font-bold hidden lg:block">
              Choose your
              <br /> apartment
            </h1>
            <h1 className="text-2xl font-bold lg:hidden">
              Choose your apartment
            </h1>
            <div className="flex flex-col w-[40vh]">
              <p className="text-xs mt-3 text-gray-600 line-through">
                Old Price
              </p>
              <h2 className="text-xl mt-3">New Price</h2>
              <span className="mb-1">Apartment Area</span>
              <hr className="" />
              <span className="mb-1">Balcony Area</span>
              <hr />
              <span className="mb-1">Parking Place</span>
              <hr />
              <span className="mb-1">Free Apartments</span>
            </div>
          </div>

          <div className="flex flex-col text-center p-5 lg:w-[35vh] sm:w-[38vh]  border-[12px] mt-4 border-gray-100">
            <h3 className="text-2xl mt-6 font-bold">
              2 Room <br /> Apartment
            </h3>
            <p className="text-xs mt-3 text-gray-600 line-through">$99,999</p>
            <h4 className="text-xl">$79,000</h4>
            <p className="mt-5 mb-1">
              83m<sup>2</sup>
            </p>
            <hr />
            <p className="mb-1">
              26m<sup>2</sup>
            </p>
            <hr className="w-full" />
            <p className="mb-1">X</p>
            <hr />
            <p className="mb-1">12</p>

            <button className="text-xs ml-6 rounded-full font-semibold items-center w-[20vh] mt-4 p-1 border border-gray-400">
              APARTMENT DETAILS
            </button>
            <br />
            <div className="w-35px">
              <button className="item-center text-center mt-7 mb-3 p-3 bg-black text-white font-semibold text-xs rounded-full shadow-sm hover:bg-slate-700">
                CONTACT US
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center lg:w-[35vh] sm:w-[38vh] mt-4 border-[12px] border-gray-200">
            <div className="items-center lg:ml-6 ml-[50px] px-5">
              <header className="text-sm text-white p-1 w-[18vh] bg-peacock-green items-center text-center">
                Best value for money
              </header>
            </div>
            <div className="p-5">
              <h3 className="text-2xl mt-6 font-bold">
                3 Room <br /> Apartment
              </h3>
              <p className="text-xs mt-3 text-gray-600 line-through">$99,999</p>
              <h4 className="text-xl">$79,000</h4>
              <p className="mt-5 mb-1">
                135m<sup>2</sup>
              </p>
              <hr />
              <p className="mb-1">
                45m<sup>2</sup>
              </p>
              <hr />
              <p className="mb-1">X</p>
              <hr />
              <p className="mb-1">7</p>

              <button className="text-xs ml-2 mb-2 font-semibold rounded-full mt-3 p-1 w-[20vh] border border-gray-400">
                APARTMENT DETAILS
              </button>
              <br />
              <div className="w-35px">
                <button className="item-center text-center mt-7 mb-3 p-3 bg-black text-white font-semibold text-xs rounded-full shadow-sm hover:bg-slate-700">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center p-5 lg:w-[35vh] sm:w-[38vh] mt-4 border-[12px] border-gray-200">
            <h3 className="text-2xl mt-6 font-bold">
              4 Room
              <br /> Apartment
              
            </h3>
            <p className="text-xs mt-3 text-gray-600 line-through">$129,999</p>
            <h4 className="text-xl">$109,000</h4>
            <p className="mt-5 mb-1">
              198m<sup>2</sup>
            </p>
            <hr />
            <p className="mb-1">
              67m<sup>2</sup>
            </p>
            <hr />
            <p className="mb-1">X</p>
            <hr />
            <p className="mb-1">9</p>

            <button className="text-xs lg:ml-6 ml-8 font-semibold rounded-full mt-4 p-1 w-[20vh] border border-gray-400">
              APARTMENT DETAILS
            </button>
            <br />
            <div className="w-35px">
              <button className="item-center text-center mt-7 mb-3 p-3 bg-black text-white font-semibold text-xs rounded-full shadow-sm hover:bg-slate-700">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[180px] px-2">
        <h1 className="text-3xl font-bold mt-20 lg:mb-20 mb-4">FAQ</h1>
        <div className="lg:flex md:flex justify-between">
          <div className="flex-col text-sm w-full lg:w-[70%] md:w-[45%]">
            <div className="items bg-gray-100 px-4 py-2 mb-2 rounded-md ">
              <h2 onClick={handleShow} className="cursor-pointer text-xs">
                Quite and peaceful location near the nature
                <span className="plus-icon float-right">+</span>
              </h2>

              {show && (
                <p className="answer mt-6 text-gray-600">
                  Nunc vel erat eget dolor lobortis venenatis eget in nulla.
                  Aliquam sodales ellt in augue finibus, at sagittis enim
                  vestibulum. Vivamus varius, velit sollicitudin interdum
                  cursus, augue purus dignissim quam, dictum commodo lorem ante
                  quis neque. Etiam massa erat, tristique id semper ac, placerat
                  ac magna.
                </p>
              )}
            </div>

            <div className="items bg-gray-100 px-4 py-2 mb-2 rounded-md ">
              <h2 onClick={handleShow1} className="cursor-pointer text-xs">
                Sopping and fitness center right inside the complex
                <span className="plus-icon float-right">+</span>
              </h2>
              {show1 && (
                <p className="answer mt-6 text-gray-600">
                  Nunc vel erat eget dolor lobortis venenatis eget in nulla.
                  Aliquam sodales ellt in augue finibus, at sagittis enim
                  vestibulum. Vivamus varius, velit sollicitudin interdum
                  cursus, augue purus dignissim quam, dictum commodo lorem ante
                  quis neque. Etiam massa erat, tristique id semper ac, placerat
                  ac magna.
                </p>
              )}
            </div>
            <div className="items bg-gray-100 px-4 py-2 mb-2 rounded-md ">
              <h2 onClick={handleShow2} className="cursor-pointer text-xs">
                Lots of parking places, even for your visitors
                <span className="plus-icon float-right">+</span>
              </h2>
              {show2 && (
                <p className="answer mt-6 text-gray-600">
                  Nunc vel erat eget dolor lobortis venenatis eget in nulla.
                  Aliquam sodales ellt in augue finibus, at sagittis enim
                  vestibulum. Vivamus varius, velit sollicitudin interdum
                  cursus, augue purus dignissim quam, dictum commodo lorem ante
                  quis neque. Etiam massa erat, tristique id semper ac, placerat
                  ac magna.
                </p>
              )}
            </div>
          </div>
          <div className="border-[12px] mb-7 lg:ml-10 p-2 md:w-[50%]">
            <div className="px-[2px] flex-col lg:w-full">
              <h2 className="text-sm font-semibold mb-4 mt-10">
                Subscribe to our newsletter to get the latest information
              </h2>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 text-sm border-none rounded-md w-full mr-2"
                />
                <button className="flex items-center">
                  <span className="mr-2 font-bold text-lg">→</span>
                </button>
              </div>
              <hr />
              <p className="text-sm text-gray-400 mb-9 p-3">
                *Only relevant information, no spam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[180px] lg:py-[100px] bg-cover">
        <img
          src={bgImg}
          alt="bgImg"
          className="lg:h-64 sm:h-5 brightness-50 lg:w-full md:w-full md:h-64"
        />
      </div>
    </div>
  );
};

export default Pricing;
