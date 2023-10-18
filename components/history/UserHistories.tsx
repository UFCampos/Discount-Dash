"use client";
import { useGetUserApiQuery } from "@/lib/redux/service/historyApi";
import { useSelector } from "@/lib/redux/hooks";

const UserHistories = () => {
  const { id } = useSelector((state) => state.userProfile);
  const { data, isLoading } = useGetUserApiQuery({ id });
  console.log(data);

  return (
    <div className="h-[100vh] overflow-y-auto ">
      <div className="orders-products-cont flex flex-col justify-center items-center">
        <h1 className="font-bold ">My Shop History:</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((productHistory: any) => (
            <div
              key={productHistory.id}
              className="border border-gray-500 rounded  p-4 mb-4 w-1/2 pr-4"
            >
              {productHistory.products.map((product: any) => (
                <div
                  key={product.productId}
                  className="flex border border-gray-300 rounded mb-4"
                >
                  <div className="w-3/4 pr-4 border-r border-gray-300 ml-2 text-center">
                    <h1>{product.name}</h1>
                    <div className="mt-20 font-bold">
                      <p className="mt-1">Price: ${product.price}</p>
                    </div>
                  </div>
                  <div className="w-1/4 justify-center items-center">
                    <img
                      src={product.image}
                      alt="img"
                      width={100}
                      height={100}
                      className="mx-auto my-4"
                    />
                  </div>
                </div>
              ))}
              <div>
                <div className="flex justify-between">
                  <img
                    className="w-10 h-10 mr-3 rounded-full bg-green-400"
                    src="/canasto1.svg"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <img
                    className="w-10 h-10 mr-3 rounded-full bg-green-400"
                    src="/moto3.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <img
                    className="w-10 h-10 mr-3 rounded-full bg-green-400"
                    src="/completo.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="line-horizontal bg-green border-transparent w-1/2 border-t-2 border-gray-500 my-4 mt-6 mr-3"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserHistories;
