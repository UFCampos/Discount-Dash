import Link from "next/link";
import Carousel from "../Carousel/Carousel";

const Hero = () => (
  <div>
    <section className="text-gray-200  body-font py-1 text-center overflow-x-hidden overflow-auto">
      <div className="-my-1 mb-10">
        <Carousel />
      </div>

      <div className="container mx-auto flex px-5 py-1 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"></h1>
          <p className="leading-relaxed mb-8 text-black">
            Welcome to the app where you can buy a lot of things at a very nice
            price{" "}
          </p>
          <div className="flex justify-center">
            <Link href="/home">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Client
              </button>
            </Link>
            <Link href={"/enterStore"}>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Company
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
