"use client"
import { useState } from "react"
import Image from "next/image"
import "./Order.css"


const Order = ()=>{
    const [status, setStatus] = useState("preparation")
    
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
    
      const orderStatus =()=> {
      if (status === "preparation")
          setStatus("On the wat")
      if (status === "On the wat") 
       setStatus("Delivered")
    }
        
        return (
            <div className="container-fluid my-5 flex justify-center">
            <div className="card px-2">
              <div className="card-header bg-white">
                <div className="flex justify-between">
                  <div className="col">
                    <p className="text-gray-500"> Order ID  <span className="font-semibold text-gray-900">1222528743</span></p> 
                    <p className="text-gray-500"> Place On <span className="font-semibold text-gray-900">12,March 2019</span> </p>
                  </div>
                  <div className="flex-col my-auto">
                    <h6 className="ml-auto mr-3">
                      <a href="#" className="text-blue-500">View Details</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="media flex-col sm:flex-row">
                  <div className="media-body">
                    <h5 className="font-semibold">Blade High Heels Sandals</h5>
                    <p className="text-gray-500"> Qt: 1 Pair</p>
                    <h4 className="mt-3 mb-4 font-semibold"> <span className="mt-5">&#x20B9;</span> 1,500 <span className="text-sm text-gray-500"> via (COD) </span></h4>
                    <p className="text-gray-500">Tracking Status on: <span className="text-gray-700">11:30pm, Today</span></p>
                    <button type="button" className="btn btn-outline-primary flex">Reached Hub, Delhi</button>    
                  </div>
                  <img className="self-center w-48 h-48" src="https://i.imgur.com/bOcHdBa.jpg" alt=""/>
                </div>
              </div>
              <div className="row px-3">
                <div className="col">
                  <ul id="progressbar" className="flex">
                    <li className="step0 active " id="step1">PLACED</li>
                    <li className="step0 active text-center" id="step2">SHIPPED</li>
                    <li className="step0 text-gray-500 text-right" id="step3">DELIVERED</li>
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-white px-sm-3 pt-sm-4 px-0">
                <div className="row text-center">
                  <div className="col my-auto border-r">
                    <h5 className="text-lg text-blue-500">Track</h5>
                  </div>
                  <div className="col my-auto border-r">
                    <h5 className="text-lg text-blue-500">Cancel</h5>
                  </div>
                  <div className="col my-auto border-r">
                    <h5 className="text-lg text-blue-500">Pre-pay</h5>
                  </div>
                  <div className="col my-auto mx-0 px-0">
                    <img className="w-6 h-6 cursor-pointer" src="https://img.icons8.com/ios/50/000000/menu-2.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
}          
    export default Order;
    