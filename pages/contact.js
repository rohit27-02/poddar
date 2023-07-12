import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { ClipLoader } from 'react-spinners';

const Contact = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [submitted, setsubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, email, phone, message }
        console.log('sending')
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setsubmitted(true)
                setname('')
                setemail('')
                setphone('')
                setmessage('')
            }
            setTimeout(() => {
                setsubmitted(false)
            }, 2000);
        })
    }

    return (
        <div>
            <Banner title={"Contact Us"} />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1)", contrast: 1.2, opacity: 0.4 }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Plot no-1635, HSIIDC, INDUSTRIAL AREA, Rai, Haryana 131029</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">info@poddarspices.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">(+91) 9971748626</p>
                            </div>
                        </div>
                    </div>
                    {submitted ? <div className='flex justify-center items-center w-full h-full mx-auto'>
                        <ClipLoader
                            color="orange"
                            loading={submitted}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div> :
                        <form onSubmit={(e) => handleSubmit(e)} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Send us email and we will get in touch shortly .</p>
                            <div className="relative mb-4">
                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input value={name} onChange={(e) => setname(e.currentTarget.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input value={email} onChange={(e) => setemail(e.currentTarget.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                <input value={phone} onChange={(e) => setphone(e.currentTarget.value)} type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea value={message} onChange={(e) => setmessage(e.currentTarget.value)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                        </form>
                    }</div>
            </section>
        </div>
    )
}

export default Contact