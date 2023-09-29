"use client"
import Image from "next/image"

const Cart= () =>{


    const data = [{
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 2,

    },
    {
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 1,

    },{
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 4,

    },{
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 6,

    }
    ,{
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 1,

    },{
        id: 1,
        name: "cocacola",
        img: "a" ,
        price: 200,
        quantity: 1,

    }]

   
   
  return (
    <div className="max-w-md mx-auto">
      {data.length === 0 ? (
        <h1>Empty</h1>
      ) : (
        data.map((product, index) => (
          <div key={product.id} className="flex items-center p-4 my-4 border border-black rounded shadow backdrop-blur-md ">
         <div className="border border-gray-300 rounded mr-4">
              <Image
                src="/images.jpg"
                alt="Product Image"
                height={100}
                width={100}
              />
            </div>
            <div className="ml-4 border-black">
              <h1 className="text-xl font-bold text-gray-950">{product.name}</h1>
              <p className="text-base text-gray-950">$ {product.price}</p>
              <div className="mt-2">
                <button className="bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-800 mr-2 mb-2 ">
                  <Image src="/menos3.png" height={10} width={12} />
                </button>
                <h2 className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  quantity: {product.quantity}
                </h2>
                <button className="bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-800 mr-2 mb-2">
                  <Image src="/anadir.png" height={5} width={12} />
                </button>
                <h5 className="text-black">total: {product.quantity * product.price}</h5>
              </div>
            </div>
            {index < data.length - 1 && (
              <hr className="border-gray-300 mx-4" /> // Línea divisoria
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;