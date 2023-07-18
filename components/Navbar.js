/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [page, setpage] = useState("home");
    const [ham, setham] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setpage(router.asPath)
        const handleScroll = () => {
            // Check if the page is scrolled
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nav = `text-gray-800 body-font sticky z-50 bg-gradient-to-b to-orange-50 from-white top-0 ${isScrolled ? "drop-shadow " : ""}`;

    return (
        <header id="outer-container" className={nav}>
            {typeof window !== 'undefined' && window.screen > 700 ? <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 gap-5 font-semibold flex-wrap items-center text-base md:ml-auto">
                    <a href="/" className={page == "/" ? "text-amber-800" : "hover:text-amber-800"}>HOME</a>
                    <a href="Products" className={page == "/Products" ? "text-amber-800" : "hover:text-amber-800"}>SHOP NOW</a>
                    <a href="about" className={page == "/about" ? "text-amber-800" : "hover:text-amber-800"}>ABOUT US</a>
                    <a href='contact' className={page == "/contact" ? "text-amber-800" : "hover:text-amber-800"}>CONTACT</a>
                    <a href='Blog' className={page == "/Blog" ? "text-amber-800" : "hover:text-amber-800"}>BLOG</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img className={isScrolled ? 'h-[4rem] transition-all duration-700' : "h-[7em] transition-all duration-700"} src='/logo.png' />
                </a>

                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <form >
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   " placeholder="Search Spices" required />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        </div>
                    </form>
                </div>
            </div> :
                <div className=" flex items-center justify-between px-6 ">
                    <img onClick={() => setham(true)} className='h-10 w-14' src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" />

                    <a className=" mx-auto title-font font-medium items-center text-gray-900 ">
                        <img className={isScrolled ? 'h-[4rem] transition-all duration-700' : "h-[5em] transition-all duration-700"} src='/logo.png' />
                    </a>

                    {
                        ham &&
                        <div className='fixed top-0 bg-amber-50 h-full left-0 w-[70%]'>
                            <div className='flex flex-col text-3xl my-28 gap-10 font-bold mx-10'>
                            <img onClick={()=>setham(false)} className='absolute right-4 top-4 w-14' src="https://img.icons8.com/material-outlined/64/multiply--v1.png" alt="multiply--v1"/>
                                <a href="/" className={page == "/" ? "border-b-2 border-amber-800 pb-4 text-amber-800" : "border-b-2 border-amber-800 pb-4 hover:text-amber-800"}>HOME</a>
                                <a href="Products" className={page == "/Products" ? "border-b-2 border-amber-800 pb-4 text-amber-800" : "border-b-2 border-amber-800 pb-4 hover:text-amber-800"}>SHOP NOW</a>
                                <a href="about" className={page == "/about" ? "border-b-2 border-amber-800 pb-4 text-amber-800" : "border-b-2 border-amber-800 pb-4 hover:text-amber-800"}>ABOUT US</a>
                                <a href='contact' className={page == "/contact" ? "border-b-2 border-amber-800 pb-4 text-amber-800" : "border-b-2 border-amber-800 pb-4 hover:text-amber-800"}>CONTACT</a>
                                <a href='Blog' className={page == "/Blog" ? "border-b-2 border-amber-800 pb-4 text-amber-800" : "border-b-2 border-amber-800 pb-4 hover:text-amber-800"}>BLOG</a>
                            </div>

                        </div>
                    }
                </div>
            }
        </header>
    )
}

export default Navbar