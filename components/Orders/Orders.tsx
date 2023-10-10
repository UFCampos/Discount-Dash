"use client"
import { useState, useEffect } from "react"
import { Image } from "@nextui-org/react";
import "./Order.css"
import { memoryLruGarbageCollector } from "firebase/firestore";


const Order = ()=>{
    
    const data = [{
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 2,
        
    },
    {
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 1,
        
    },{
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 4,
        
    },{
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 6,
        
    }
    ,{
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 1,
        
    },{
        id: 1,
        name: "cocacola",
        Image: "a" ,
        price: 200,
        quantity: 1,
        
    }]
    const [status, setStatus] = useState("preparation")
    
console.log(status);

// useEffect(()=>{
    
// }[])
    
    const handleStatusChange =()=> {
        if (status === "preparation")
          setStatus("On the wait")
      if (status === "On the wait") 
       setStatus("Delivered")
    }

    
    return (
        <body className="text-black overflow-x-hidden h-screen bg-indigo-400 bg-no-repeat">
          <div className="container px-1 px-md-4 py-5 mx-auto">
            <div className="card bg-gray-300 p-0 md:p-5 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between px-3 top">
                <div className="flex">
                  <h5>YOUR ORDER</h5>
                </div>
                <div className="flex flex-col text-sm-right"></div>
              </div>
              <div className="flex justify-center">
                <div className="col-12">
                </div>
        </div>
        {status === "preparation" && (
  <div className="flex justify-center top mt-2">
    <div className="flex flex-col items-center icon-content">
      <Image className="w-14 h-14 mr-3 rounded-full bg-green-400 " src="/canasto1.svg" alt="" width={300} height={300} />
      <div className="flex flex-col">
        <p className="font-bold">Order Processed</p>
      </div>
    </div>
    <div className="line-horizontal w-1/2 border-t border-gray-500 my-4 mt-6 mr-3"></div>
    <div className="flex flex-col items-center icon-content">
      <Image className="w-16 h-16 mr-3 bg-green-000 rounded-full" src="/moto3.svg" alt="" width={300} height={300} />
      <div className="flex flex-col">
        <p className="font-bold">Order En Route</p>
      </div>
    </div>
    <div className="line-horizontal w-full border-t-5 border-gray-500 my-4 mt-6"></div>
    <div className="flex flex-col items-center icon-content">
      <Image className="icon w-16 h-16 mr-3 rounded-full  bg-green-000" src="/completo.svg" alt="" width={300} height={300} />
      <div className="flex flex-col">
        <p className="font-bold">Order Arrived</p>
      </div>
    </div>
  </div>
)}
              {status === "On the wait" && (
              <div className="flex justify-center top">
              <div className="flex flex-col items-center icon-content">
                <Image className="w-14 h-14 mr-3 rounded-full bg-green-400 " src="/canasto1.svg" alt="" width={300} height={300} />
                <div className="flex flex-col">
                  <p className="font-bold">Order Processed</p>
                </div>
              </div>
         <div className="line-horizontal w-full border-t-5 border-gray-500 my-4 mt-6"></div>
              
              <div className="flex flex-col items-center icon-content">
                <Image className="w-16 h-16 mr-3 bg-green-400 rounded-full" src="/moto3.svg" alt="" width={300} height={300} />
                <div className="flex flex-col">
                  <p className="font-bold">Order En Route</p>
                </div>
              </div>
        <div className="line-horizontal w-full border-t-5 border-gray-500 my-4 mt-6"></div>
              
              <div className="flex flex-col items-center icon-content">
                <Image className="icon w-16 h-16 mr-3 rounded-full  bg-green-000" src="/completo.svg" alt="" width={300} height={300} />
                <div className="flex flex-col">
                  <p className="font-bold">Order Arrived</p>
                </div>
              </div>
            </div>
              )}
              {status === "Delivered" && (
      <div className="flex justify-center top">
      <div className="flex flex-col items-center icon-content">
        <Image className="w-14 h-14 mr-3 rounded-full bg-green-400 " src="/canasto1.svg" alt="" width={300} height={300} />
        <div className="flex flex-col">
          <p className="font-bold">Order Processed</p>
        </div>
      </div>
    <div className="line-horizontal w-full border-t-5 border-gray-500 my-4 mt-6"></div>
      
      <div className="flex flex-col items-center icon-content">
        <Image className="w-16 h-16 mr-3 bg-green-400 rounded-full ml-3" src="/moto3.svg" alt="" width={300} height={300} />
        <div className="flex flex-col">
          <p className="font-bold">Order En Route</p>
        </div>
      </div>
       <div className="line-horizontal w-full border-t-5 border-gray-500 my-4 mt-6"></div>
      
      <div className="flex flex-col items-center icon-content">
        <Image className="icon w-16 h-16 mr-3 rounded-full ml-0 z-1000 bg-green-400 items-center" src="/completo.svg" alt="" width={300} height={300} />
        <div className="flex flex-col">
          <p className="font-bold">Order Arrived</p>
        </div>
      </div>
    </div>
              )}
              <button className="btn-change-status" onClick={handleStatusChange}>
                Change Status
              </button>
            </div>
          </div>
        </body>
      );
      

};

export default Order;
