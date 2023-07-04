import Image from "next/image";
import React from "react";
import nature from "@/public/nature.jpg";

const ProductCard = () => {
  return (
    <>
      <div className=" w-[300px] h-[400px]  flex shrink-0 flex-col p-4 rounded-xl shadow-2xl hover:scale-105 duration-700 ease-in-out">
        <Image src={nature} width={200} height={200} className="w-full h-60 rounded-xl cursor-pointer" />
        <div className="mx-2">
          <div className="flex justify-between my-2 ">
            <h2>Product Name</h2>
            <span>Price</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consecte, adipisicing elit. Cum esse
            ab officiis? sit meatl
          </p>
          <div className="flex justify-between mt-2 my-2 text-sm">
            <button className="bg-blue-600 text-center text-white rounded-xl py-1.5  px-5  hover:bg-white hover:text-blue-600 hover:border-2 hover:font-semibold  hover:border-blue-600 ease-in-out duration-500">
              Add to Card
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 rounded-xl py-1.5  px-5  hover:bg-blue-600 hover:text-white font-semibold  hover:border-blue-600 ease-in-out duration-500">

            Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
