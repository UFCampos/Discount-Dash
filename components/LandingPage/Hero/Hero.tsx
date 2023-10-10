import Link from 'next/link';
import Carrucel from '../Carrucel/Carucel';

const Hero = () => {
 

  return (
    <div>
      <section className="text-gray-200  body-font py-1 text-center overflow-x-hidden">
        <div className='-my-1 mb-14' >
         <Carrucel/>
        </div>

        <div className="container mx-auto flex px-5 py-1 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"></h1>
            <p className="leading-relaxed mb-8 text-black">Welcome to the app where you can buy a lot of things at a very nice price   </p>
            <div className="flex justify-center my-9">
              <Link href="/home">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
