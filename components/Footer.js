/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 relative body-font">
      <img className='absolute opacity-30 bottom-0 -z-50 h-[22rem] w-full object-cover' src='/footer-bg.jpg' alt='footer bg'/>
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src='/logo.png' alt='logo' />
          </a>
          <p className="mt-2 text-sm drop-shadow-sm text-gray-600">We create the perfect blends of aroma, freshness and flavour loved by millions of housewifes across the globe.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font drop-shadow font-medium text-gray-900 tracking-widest text-sm mb-3">HELPDESK</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">FAQ&apos;S</a>
              </li>
              <li>
                <a href='contact' className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">CONTACT US</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font drop-shadow font-medium text-gray-900 tracking-widest text-sm mb-3">USEFUL LINKS</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">PRIVACY POLICY</a>
              </li>
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">TERMS & CONDITIONS</a>
              </li>
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">SHIPPING POLICY</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font drop-shadow font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">Address: Plot no-1635, HSIIDC, INDUSTRIAL AREA, Rai, Haryana 131029</a>
              </li>
              <li>
                <span>Phone : </span>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">(+91) 9971748626</a>
              </li>
              <li>
                <a className="cursor-pointer drop-shadow text-gray-600 hover:text-gray-800">info@poddarspices.com</a>
              </li>
            </nav>
          </div>

        </div>
      </div>
      <div className="bg-orange-50 ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 poddarspices 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer