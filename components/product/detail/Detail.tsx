"use client";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { Image } from "@nextui-org/react";
import "./Detail.css";
import Reviews from "@/components/reviews/Reviews";
import AllReviews from "@/components/reviews/GetAllReviews";

const Detail = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetProductQuery({ id });
  return  (
    <div>
      <section className="text-gray-600 body-font overflow-auto">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex items-center border border-gray-800 rounded-lg p-4 lg:p-8">
            <div className="lg:w-1/2 lg:h-auto h-64 mx-auto object-cover object-center rounded">
              <Image
                alt={data?.name}
                className="w-full h-full"
                src={data?.image}
                width={350}
                height={350}
              />
            </div>
            <div className="lg:w-1/2 mx-auto lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Food
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
                {data?.name}
              </h1>
              <h2 className="text-sm title-font text-gray-700 tracking-widest">
                {data?.brand}
              </h2>
              <div className="flex items-center mt-4">
                <div className="flex space-x-2">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </div>
              <p className="leading-relaxed mt-4">
                Hamburguesa con queso cheddar, dos medallones de carne de 250g, salsa de la casa, cebolla, lechuga, tomate y extra papas.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-red-100 mb-5">
                  <Reviews productId={id} />
                <div className="max-h-60 w-60 overflow-y-auto"> 
                  <AllReviews productId={id} />
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${data?.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-600 p-0 border-0 inline-flex items-center justify-center text-gray-900 ml-4">
                  <Image
                    className="w-7 h-7"
                    src="/carrito.png"
                    width={350}
                    height={350}
                    alt="carrito"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
