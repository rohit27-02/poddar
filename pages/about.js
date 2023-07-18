/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const About = () => {
  return (
    <div className='text-gray-600 drop-shadow-sm'>
      <Banner title={"About Us"} />
      <div className='flex flex-col gap-[2rem] mx-10 md:mx-[20rem] text-justify my-[3rem]'>
        <p>Today, Poddar Masala Company has become a household name among Indians and other nationalities around the globe.</p>
        <p>The company has set up a manufacturing unit in the heart of our proud country India in Delhi. Where it produces pure spices, blend spices and other powdered drink products under the “Poddar” brand name.</p>
        <p className='border-l-2 pl-[2rem] border-amber-800 italic'>Poddar Spices has always endeavoured to eliminate all possible risks with regard to food safety and also to guarantee the highest standards of food safety, public health and product quality.</p>
        <p>Our production, processing and packaging procedure have been aligned to be the best in class. Our diligently sourced raw materials are put through an extensive cleaning process before they are processed in our manufacturing plant. All products are then put through stringent quality tests before being packaged and stored at our storage unit. This process ensures that our fresh, tasty products remain that way until its use.</p>
      </div>
      <div className='py-[2rem] px-10 bg-orange-50'>
        <h1 className='text-center text-4xl text-amber-800 font-semibold'>Processing of Spices Includes:</h1>
        <div className='flex max-sm:flex-col justify-center gap-[4rem] my-[5rem]'>
          <div className='flex md:w-1/4 max-sm:items-center flex-col text-justify gap-[1rem]'>
            <img width="64" height="64" src="https://img.icons8.com/external-semi-solid-chattapat-/64/external-harvest-spring-semi-solid-chattapat-.png" alt="external-harvest-spring-semi-solid-chattapat-" />
            <h1 className='text-xl text-gray-800 font-semibold'>CLEANING</h1>
            <p>We clean the crop before processing. The first stage is to remove dust and dirt by using destoners and vibrators. After cleaning if required roasting process is done to maintain moisture content of the raw material. After cleaning spices are graded by size, density, colour, shape and flavour.</p>
          </div>
          <div className='flex md:w-1/4 max-sm:items-center flex-col text-justify gap-[1rem]'>
            <img width="64" height="64" src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-size-reduction-food-processing-ddara-lineal-ddara.png" alt="external-size-reduction-food-processing-ddara-lineal-ddara" />
            <h1 className='text-xl text-gray-800 font-semibold'>GRINDING</h1>
            <p>Grinding is done by powered grinding mills after ensuring the quality of the raw material. We have different types of grinding mills for different products. We placed the grinding mills in a separate and well-ventilated room keeping it safe from dust. Utmost care is given to ensure uniform sized pieces/powders is extracted after grinding without any damage to the spices caused by heating during grinding.</p>
          </div>
          <div className='flex md:w-1/4 max-sm:items-center flex-col text-justify gap-[1rem]'>
            <img width="64" height="64" src="https://img.icons8.com/external-febrian-hidayat-glyph-and-outline-febrian-hidayat/64/external-Packaging-delivery-and-logistic-febrian-hidayat-outline-and-glyph-febrian-hidayat-2.png" alt="external-Packaging-delivery-and-logistic-febrian-hidayat-outline-and-glyph-febrian-hidayat-2" />
            <h1 className='text-xl text-gray-800 font-semibold'>PACKAGING</h1>
            <p>We understand the importance of packaging and preservation of our products. We are equipped with sophisticated equipment and packaging facilities to prevent our product from spoilage and preserve their freshness, colour, taste and aroma. Our packaging techniques use minimum human interference, which includes fully automatic machine operation, untouched by the human hand.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About