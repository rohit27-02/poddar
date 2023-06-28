import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const reviews = [{name:"hi",message:"wow nice product",occupation:"house wife"},
{name:"hi",message:"wow nice product",occupation:"house wife"},
{name:"hi",message:"wow nice product",occupation:"house wife"},
{name:"hi",message:"wow nice product",occupation:"house wife"},
]
const Reviews = () => {
  return (
    <div className=' flex mx-auto w-[80%] overflow-hidden'>
    <Carousel 
   autoPlay={true}
   infiniteLoop={true}
   showStatus={false}
   showIndicators={false}
   showThumbs={false}
   interval={3000}
   centerMode={true}
   centerSlidePercentage={10}
   
   >
       {reviews.map((r)=>{
        return <div key={r.id} className='bg-red-300 h-[15rem] w-[40rem] shadow-md'>
            <h1>{r.name}</h1>
            <p>{r.message}</p>
            <p>{r.occupation}</p>
        </div>
       })}
       
   </Carousel>
  </div>
  )
}

export default Reviews