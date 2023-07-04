"use client"

import React from 'react'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div className="mt-12 container mx-auto">
          <h1 className="text-center text-3xl font-bold">Feature Products</h1>
          <div className="max-w-6xl mx-auto  h-[500px] flex items-center ">
              <div className="flex overflow-auto gap-8 p-8">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

              </div>
          </div>

    </div>
  )
}

export default Home