/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const reviews = [{ name: "hi", message: "wow nice product", occupation: "house wife" },
{ name: "hi", message: "This is absolutely delicious! Fresh flavour, beautiful color.can't say enough good things about it", occupation: "house wife" },
{ name: "hi", message: "wow nice product", occupation: "house wife" },
{ name: "hi", message: "wow nice product", occupation: "house wife" },
{ name: "hi", message: "wow nice product", occupation: "house wife" },
]
const Reviews = () => {
  return (
    <div className=' flex justify-center '>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={33.3}
        autoFocus={true}
        showArrows={false}

      >
        {reviews.map((r) => {
          return <div key={r.id} className=' h-[20rem] font-semibold mx-2 border-2 space-y-[2%] shadow-md'>
            <div className=" my-[4%] bg-gray-200 w-[30%] rounded-full overflow-hidden mx-auto">
              <img width="188" height="188" src="https://img.icons8.com/3d-fluency/188/person-male--v3.png" alt="person-male--v3" />
            </div>
            <p></p>
            <h1 className='px-[5%] text-gray-600'>{r.message}</h1>
            <p>{r.name}-<span className='text-gray-600'>{r.occupation}</span></p>
          </div>
        })}

      </Carousel>
    </div>
  )
}

export default Reviews