/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

const ACHAAR = [
    { img: "/1.jpg", name: "thandai", price: 30 },
    { img: "/2.jpg", name: "thandai", price: 120 },
    { img: "/3.jpg", name: "thandai", price: 40 },
    { img: "/4.jpg", name: "thandai", price: 200 },
    { img: "/5.jpg", name: "thandai", price: 80 },
    { img: "/6.jpg", name: "thandai", price: 90 },
    { img: "/7.jpg", name: "thandai", price: 70 },
    { img: "/8.jpg", name: "thandai", price: 100 },
]
const BEST = [
    { img: "/1.jpg", name: "thandai", price: 30 },
    { img: "/2.jpg", name: "thandai", price: 120 },
    { img: "/3.jpg", name: "thandai", price: 40 },
    { img: "/4.jpg", name: "thandai", price: 200 },
    { img: "/5.jpg", name: "thandai", price: 80 },
    { img: "/6.jpg", name: "thandai", price: 90 },
    { img: "/7.jpg", name: "thandai", price: 70 },
    { img: "/8.jpg", name: "thandai", price: 100 },
]
const BLEND = [
    { img: "/1.jpg", name: "thandai", price: 30 },
    { img: "/2.jpg", name: "thandai", price: 120 },
    { img: "/3.jpg", name: "thandai", price: 40 },
    { img: "/4.jpg", name: "thandai", price: 200 },
    { img: "/5.jpg", name: "thandai", price: 80 },
    { img: "/6.jpg", name: "thandai", price: 90 },
    { img: "/7.jpg", name: "thandai", price: 70 },
    { img: "/8.jpg", name: "thandai", price: 100 },
]
const KITCHEN = [
    { img: "/1.jpg", name: "thandai", price: 30 },
    { img: "/2.jpg", name: "thandai", price: 120 },
    { img: "/3.jpg", name: "thandai", price: 40 },
    { img: "/4.jpg", name: "thandai", price: 200 },
    { img: "/5.jpg", name: "thandai", price: 80 },
    { img: "/6.jpg", name: "thandai", price: 90 },
    { img: "/7.jpg", name: "thandai", price: 70 },
    { img: "/8.jpg", name: "thandai", price: 100 },
]
const SUMMER = [
    { img: "/1.jpg", name: "thandai", price: 30 },
    { img: "/2.jpg", name: "thandai", price: 120 },
    { img: "/3.jpg", name: "thandai", price: 40 },
    { img: "/4.jpg", name: "thandai", price: 200 },
    { img: "/5.jpg", name: "thandai", price: 80 },
    { img: "/6.jpg", name: "thandai", price: 90 },
    { img: "/7.jpg", name: "thandai", price: 70 },
    { img: "/8.jpg", name: "thandai", price: 100 },
]


const Products = () => {
    const [value, setvalue] = useState(300);
    const [category, setcategory] = useState(ACHAAR);
    const [price, setprice] = useState(300);


    return (
        <div>
            <div className='h-[18rem] transition-all duration-300 relative object-scale-down overflow-hidden'>
                <img className=' w-full ' src='/products.jpg' alt='banner img' />
                <h1 className='text-white text-center w-full text-6xl font-bold absolute top-[4rem] drop-shadow'>Products</h1>
                <div className='flex absolute text-white top-[10rem] gap-[2rem] justify-center w-full'>
                    <button onClick={(e) => { setcategory(ACHAAR) }}>Achaar Masala</button>
                    <button onClick={(e) => { setcategory(BEST) }}>Best Sellers</button>
                    <button onClick={(e) => { setcategory(BLEND) }}>Blend Spices</button>
                    <button onClick={(e) => { setcategory(KITCHEN) }}>Kitchen Essentials</button>
                    <button onClick={(e) => { setcategory(SUMMER) }}>Summer Specials</button>
                </div>
            </div>
            <div className='flex justify-between px-[8rem] text-sm my-[2rem]'>
                <div className='font-medium w-1/6 text-gray-500 '>
                    <div className='border-b flex flex-col items-start py-[1rem] my-[1rem] border-gray-500 space-y-[1rem]'>
                        <h1 className='text-gray-800'>CATEGORIES</h1>
                        <button className={category == ACHAAR ? "text-amber-800" : "hover:text-amber-800"} onClick={(e) => { setcategory(ACHAAR) }}>Achaar Masala</button>
                        <button className={category == BEST ? "text-amber-800" : "hover:text-amber-800"} onClick={(e) => { setcategory(BEST) }}>Best Sellers</button>
                        <button className={category == BLEND ? "text-amber-800" : "hover:text-amber-800"} onClick={(e) => { setcategory(BLEND) }}>Blend Spices</button>
                        <button className={category == KITCHEN ? "text-amber-800" : "hover:text-amber-800"} onClick={(e) => { setcategory(KITCHEN) }}>Kitchen Essentials</button>
                        <button className={category == SUMMER ? "text-amber-800" : "hover:text-amber-800"} onClick={(e) => { setcategory(SUMMER) }}>Summer Specials</button>
                    </div>
                    <div className='border-b pb-[1rem] my-[1rem] border-gray-500 space-y-[1rem]'>
                        <h1 className='text-gray-800'>FILTER BY PRICE</h1>
                        <input id='range' value={value} min="20" step="10" max="300" onChange={(e) => setvalue(e.currentTarget.value)} className='appearance-none  bg-amber-800 h-[0.2rem] cursor-e-resize w-full' type='range' />
                        <div className='flex items-center justify-between'><p>Price: <span className='text-gray-800'>₹20 — ₹{value}</span></p><button onClick={() => { setprice(document.getElementById("range").value) }} className='text-gray-800 bg-gray-200 px-[0.8rem] py-[0.3rem]  rounded-full'>FILTER</button></div>
                    </div>
                </div>
                <div className="flex w-5/6 pl-[5.7rem] gap-[2rem]  py-[2%] flex-wrap">
                    {
                        category.map((product) => {

                            return product.price <= price && <div key={product.id} className="hover:drop-shadow  group  flex flex-col items-center cursor-pointer">
                                <div className="w-[12rem] overflow-hidden">
                                    <img className="group-hover:scale-110 transition-all duration-500" alt={product.name} src={product.img} /></div>
                                <h1 className='font-semibold drop-shadow-sm'>{product.name}</h1>
                                <h1 className='font-bold drop-shadow-sm'>₹ {product.price}</h1>

                            </div>


                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products