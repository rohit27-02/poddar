/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import TopCarousel from "../components/Carousel";
import Reviews from "../components/Reviews";
import WhatsAppButton from "../components/Whatsapp";

const products = [
  { img: "/1.jpg",img2:"/2.jpg", name: "Atom Harde"},
  { img: "/4.jpg",img2:"/3.jpg", name: "Jeera Goli"},
  { img: "/6.jpg",img2:"/5.jpg", name: "Pathar Hajam churan"},
  { img: "/7.jpg",img2:"/8.jpg", name: "Anardana churan"},
  { img: "/9.jpg",img2:"/10.jpg", name: "Hing Goli"},
  { img: "/11.jpg",img2:"/12.jpg", name: "Arabpati Goli"},
  { img: "/14.jpg",img2:"/13.jpg", name: "Rochak Munakka"},
  { img: "/15.jpg",img2:"/16.jpg", name: "Kabali Hing Goli"},

]

export default function Home() {
  return (
    <div>
      <TopCarousel />
      <WhatsAppButton/>

      <div className="flex justify-center py-[2%] flex-col items-center">
        <h1 className="text-5xl font-bold">Our Products</h1>
        <div className="flex w-[85%] mx-auto gap-[2rem] justify-evenly py-[2%] flex-wrap">
          {
            products.map((product) => {
              return <div key={product.id} className="hover:drop-shadow  group  flex flex-col items-center cursor-pointer">
                <div className="w-[15rem] overflow-hidden"><img className="group-hover:scale-110 transition-all duration-500" alt={product.name} src={product.img} /></div>
                <h1 className="drop-shadow font-semibold">{product.name}</h1>
              </div>
            })
          }
        </div>
        <a href="Products" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          More
        </a>
      </div>

      <div className="flex justify-center py-[2%] flex-col items-center">
        <h1 className="text-5xl font-bold">Our Range of Spices</h1>
        <div className="flex text-gray-600 justify-between px-[6%] gap-[2%] py-[4%]">
          <div className="overflow-hidden w-[30%]">
            <div className="hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-orange-400 relative ">
              <div className=" top-0  p-[5%]  font-medium ">
                {/* <h1 className="text-2xl text-orange-400 font-bold mb-[3%]">GROUND SPICES</h1> */}
                <p>Our ground spices are freshly ground to ensure their sharp & flavour</p>
              </div>
              <img src="/spices.png" className=" object-cover" />
            </div>
          </div>
          <div className="w-[30%] overflow-hidden">

            <div className="hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-amber-800 relative ">
              <div className=" top-0  p-[5%]  font-medium ">
                {/* <h1 className="text-2xl text-amber-800 font-bold mb-[3%]">BLENDED SPICES</h1> */}
                <p>Focus on delivering heat, pungency, sweetness & plenty of earthy flavor.</p>
              </div>
              <img src="/spices.png" className=" object-cover" />
            </div>
          </div>
          <div className="w-[30%] overflow-hidden">

            <div className="hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-green-600 relative ">
              <div className=" top-0 p-[5%] font-medium ">
                {/* <h1 className="text-2xl text-green-600 font-bold mb-[3%]">SPECIAL SPICES</h1> */}
                <p>Spices that will lace your creations with the warmest of flavors.</p>
              </div>
              <img src="/spices.png" className=" object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-gray-500 font-semibold bg-gray-50 py-[2%] px-[6%] flex-col items-center">
        <h1 className="text-5xl text-gray-900 font-bold">Number&apos;s Speaks Itself</h1>
        <div className="flex py-[4%] justify-center items-center">
          <div className="flex flex-col space-y-[10%]">
            <div className="flex items-center justify-center">
              <div className="text-right w-2/3">
                <h1 className="font-bold text-lg text-gray-700">#1 Best in Class</h1>
                <p>Rated best in class products in range and category.</p>
              </div>
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="ml-[10%]" />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-right w-2/3">
                <h1 className="font-bold text-lg text-gray-700">12000+ Retail Network</h1>
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
                <h1 className="font-bold text-lg text-gray-700">56+ Registered SKU&apos;s</h1>
                <p>We have vast range of products and variety available in this segment.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img width="20%" height="20%" src="https://img.icons8.com/ios/100/soup-plate.png" alt="soup-plate" className="mr-[10%]" />
              <div className=" w-2/3">
                <h1 className="font-bold text-lg text-gray-700">140 + Dealers & Distributors</h1>
                <p>Our dealers and distributors are present in almost every location in India.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center bg-gray-50 py-[2%]  flex-col items-center">
        <h1 className="text-5xl font-bold">What Our&apos; Customer&apos; say !</h1>
        <p className="text-gray-600 font-semibold my-[2%]">We love collecting smiley&apos;s, here are some happy feedbacks !</p>
        <div className="w-[80%] overflow-hidden mx-auto">
          <Reviews />
        </div>
      </div>

      <div>
        <h1 className="text-center font-bold text-4xl bg-gray-50 py-[4%]">Follow us on Instagram <a className="hover:text-amber-800 transition-all duration-300" href="https://instagram.com/poddarchurans?igshid=NTc4MTIwNjQ2YQ==">@poddarpharmacy</a></h1>
      </div>

    </div>
  )
}
