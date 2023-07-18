/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

const products = [
    { img: "/1.jpg", img2: "/2.jpg", name: "Atom Harde" },
    { img: "/4.jpg", img2: "/3.jpg", name: "Jeera Goli" },
    { img: "/6.jpg", img2: "/5.jpg", name: "Pathar Hajam churan" },
    { img: "/7.jpg", img2: "/8.jpg", name: "Anardana churan" },
    { img: "/9.jpg", img2: "/10.jpg", name: "Hing Goli" },
    { img: "/11.jpg", img2: "/12.jpg", name: "Arabpati Goli" },
    { img: "/15.jpg", img2: "/16.jpg", name: "Kabali Hing Goli" },
    { img: "/17.jpg", img2: "/18.jpg", name: "Podina Churan" },
    { img: "/14.jpg", img2: "/13.jpg", name: "Rochak Munakka" },

]


const Products = () => {
    const [hover, sethover] = useState();

    return (
        <div>
            <div className='h-[12rem] md:h-[18rem] bg-gradient-to-r  from-[#F3904F] to-[#3B4371] transition-all duration-300 relative object-scale-down overflow-hidden'>
                <h1 className='text-white text-center w-full text-4xl md:text-6xl font-bold absolute top-[5rem] md:top-[7rem]  drop-shadow'>SHOP NOW</h1>

            </div>

            {/* <div className='flex justify-between px-[8rem] text-sm my-[2rem]'>
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
               
            </div> */}

            <div className="flex mx-auto w-[85%] md:justify-center max-sm:items-center gap-3 mt-[5%] md:gap-[2rem]  py-[5%] flex-wrap">
                {
                    products.map((product) => {

                        return <div key={product.id} className="hover:drop-shadow p-6 rounded my-2 border group w-[48%] md:w-1/4 bg-gray-100 flex flex-col items-center">
                            <div className="md:w-[12rem] w-36 h-36 rounded md:h-[12rem] my-4 overflow-hidden">
                                <img onMouseEnter={() => sethover(product.name)} onMouseLeave={() => sethover()} className="group-hover:scale-110 transition-all duration-500" alt={product.name} src={hover == product.name ? product.img2 : product.img} />
                            </div>
                            <h1 className='font-semibold mb-4 text-gray-700'>{product.name}</h1>
                            <div className='flex max-sm:flex-col max-sm:space-y-4 items-center justify-center'>
                                <a href=''><img className='w-16 mr-4 md:pr-2 border-gray-700 mt-2 md:border-r-2' src='/a1.webp' alt='amazon shop button'/></a>
                                <a href=''><img className='w-20 mr-4 md:pr-2 border-gray-700 md:border-r-2' src='/f1.png' alt='flipkart shop button'/></a>
                                <a href='' className='h-7 rounded-md overflow-clip w-16'><img className='object-center -my-5 md:-my-4' src='/meesho.jpg' alt='flipkart shop button'/></a>

                            </div>
                        </div>


                    })
                }
            </div>
        </div>
    )
}

export default Products