"use client";
import { useGetProductQuery } from "@/lib/redux/service/productsAPI";
import { Image, divider } from "@nextui-org/react";
import "./Detail.css";
import Reviews from "@/components/reviews/Reviews";
import AllReviews from "@/components/reviews/GetAllReviews";

const Detail = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetProductQuery({ id });

  const expirationDate = new Date(
    data?.expiration?.seconds * 1000 + (data?.expiration?.nanoseconds || 0) / 1000000
  );
  const currentDate = new Date();
  const daysUntilExpiration = Math.ceil(
    (expirationDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(currentDate);

  const rest = () => {
    if (data?.expiration?.seconds) {
      const differenceInMilliseconds =
        expirationDate.getTime() - currentDate.getTime();
      const daysDifference = Math.ceil(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      if (daysDifference <= 10) {
        return daysDifference + " dias";
      } else {
        return new Date(data.expiration.seconds * 1000).toLocaleDateString();
      }
    } else {
      return "No expiration date";
    }
  };

  console.log(data);
  
  return (
      <div className="body overflow-y-auto h-min-screen ">
        <section className="text-gray-600 body-font overflow-auto">
          <div className="container px-4 py-8 mx-auto ">
            <div className="lg:w-4/5 mx-auto items-center  rounded-lg p-4 lg:p-8">
              <div className="lg:w-1/2 lg:h-auto h-48 mx-auto object-cover object-center rounded">
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
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-2 mt-2">
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
                <p className="leading-relaxed mt-4 border-t border-gray-300">
                  {data?.description}
                </p>
                <div className="card-img flex justify-center items-center text-red-400">
                  vto:{" "}
                  {data?.expiration && data?.expiration.seconds ? (
                    <p> {rest()}</p>
                  ) : null}
                </div>
              </div>
              <div className="text-center">
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${data?.price}
                  </span>
                  <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
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
            <div className=" items-center border-t border-gray-400 lg:w-4/5 mx-auto justify-between ">
              <Reviews productId={id} />
              <div className="max-h-60 w-60"></div>
              <AllReviews productId={id} />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Detail;
