/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import TopCarousel from "../components/Carousel";
import Reviews from "../components/Reviews";

const products = [{ img: "/p1.jpg", name: "thandai", },
{ img: "/p1.jpg", name: "thandai", },
{ img: "/p1.jpg", name: "thandai", },
{ img: "/p1.jpg", name: "thandai", },
{ img: "/p1.jpg", name: "thandai", }
]

export default function Home() {
  return (
    <div>
      <TopCarousel />

      <div className="flex justify-center py-[2%] flex-col items-center">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <div className="flex px-[5%] mx-auto justify-between py-[2%] flex-wrap">
          {
            products.map((product) => {
              return <div key={product.id} className="hover:drop-shadow flex flex-col items-center cursor-pointer">
                <img placeholder={product.name} src={product.img} />
                <h1>{product.name}</h1>

              </div>
            })
          }
        </div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          More
        </button>
      </div>

      <div className="flex justify-center py-[2%] flex-col items-center">
        <h1 className="text-5xl font-bold">Our Range of Spices</h1>
        <div className="flex justify-between px-[6%] gap-[2%] py-[4%]">
          <div className="w-[30%] relative ">
            <img src="/spice.jpg" className=" object-cover" />
            <div className="absolute top-0  p-[5%]  font-medium text-white">
              <h1 className="text-2xl mb-[3%]">GROUND SPICES</h1>
              <p>Our ground spices are freshly ground to ensure their sharp & flavour</p>
            </div>
          </div>
          <div className="w-[30%] relative ">
            <img src="/spice.jpg" className=" object-cover" />
            <div className="absolute top-0  p-[5%]  font-medium text-white">
              <h1 className="text-2xl mb-[3%]">BLENDED SPICES</h1>
              <p>Focus on delivering heat, pungency, sweetness & plenty of earthy flavor.</p>
            </div>
          </div>
          <div className="w-[30%] relative ">
            <img src="/spice.jpg" className=" object-cover" />
            <div className="absolute top-0 p-[5%] font-medium text-white">
              <h1 className="text-2xl mb-[3%]">SPECIAL SPICES</h1>
              <p>Spices that will lace your creations with the warmest of flavors.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-50 py-[2%] px-[6%] flex-col items-center">
        <h1 className="text-5xl font-bold">Number&apos;s Speaks Itself</h1>
        <div className="flex py-[4%] justify-center items-center">
          <div className="flex flex-col space-y-[10%]">
            <div className="flex items-center justify-center">
              <div className="text-right w-2/3">
                <h1 className="font-bold text-lg">#1 Best in Class</h1>
                <p>Rated best in class products in range and category.</p>
              </div>
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="ml-[10%]" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-right w-2/3">
                <h1 className="font-bold text-lg">12000+ Retail Network</h1>
                <p>We have a strong retail network, covering almost every corner of India.</p>
              </div>
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="ml-[10%]" />
            </div>
          </div>

          <div className=" mx-[5%] w-[70%] overflow-hidden">
            <img src="/spice.jpg" />
          </div>

          <div className="flex flex-col space-y-[10%]">
            <div className="flex items-center justify-center">
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="mr-[10%]" />
              <div className=" w-2/3">
                <h1 className="font-bold text-lg">56+ Registered SKU&apos;s</h1>
                <p>We have vast range of products and variety available in this segment.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="mr-[10%]" />
              <div className=" w-2/3">
                <h1 className="font-bold text-lg">140 + Dealers & Distributors</h1>
                <p>Our dealers and distributors are present in almost every location in India.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center bg-gray-50 py-[2%]  flex-col items-center">
        <h1 className="text-5xl font-bold">What Our&apos; Customer&apos; say !</h1>
        <p className="text-gray-600 font-semibold my-[2%]">We love collecting smiley&apos;s, here are some happy feedbacks !</p>
        <div className="w-[100%] overflow-hidden mx-auto">
        <Reviews/>
        </div>
      </div>

    </div>
  )
}
