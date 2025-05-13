import React from 'react'
import { useEffect } from 'react';
import ReactDom from "react-dom"
import itemArr from "../../ItemArr";

const eqArr = []

export default function Qoutes( { setOpen, equipmentList }) {
console.log(equipmentList)

  return ReactDom.createPortal(
    <div className= "fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">

      <div className="w-[95%] sm:w-[70%] h-[90%] overflow-y-auto bg-gradient-to-br from-white to-purple-50 p-6">

        <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center underline">EQUIPMENT & RENTAL PRICE</h1>
        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
    {
        equipmentList.map((item) =>(
    <div>
        <h3 className="text-center text-purple-800 underline m-3">{item.title}</h3>
        <img 
              src={item.imageUrl} 
              alt={item.description} 
              className="w-full h-48 object-contain overflow-x-auto"
            />

             <div className="p-4">
              <p className="h-[30%] text-gray-600 text-xs line-clamp-2 mb-2 overflow-y-auto">{item.description}</p>
              <p className="text-purple-600 font-bold text-lg">{item.price}</p>
            </div>
    </div>

        ))
    }

</div>

      </div>

      <button className="absolute top-4 right-4 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-full p-2 transition-colors duration-200 z-10"
            aria-label="Close"
            onClick={() => {setOpen(false)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
        </button>
    </div>, 

    (window.document.getElementById("pop-gallery"))
  )
}
