import React, { useState, useEffect, useRef } from 'react'
import Banner from '../components/Banner'
import { ClipLoader } from 'react-spinners';
import 'animate.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [submitted, setsubmitted] = useState(false);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(77.10286068114056);
    const [lat, setLat] = useState(28.929460186452193);
    const [zoom, setZoom] = useState(16);
    const [toast, settoast] = useState(false);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        // Create a new marker.
        const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .setPopup(new mapboxgl.Popup().setHTML("<h1>Poddar Ayurvedic Pharmacy, Plot no-1635, HSIIDC, INDUSTRIAL AREA, Rai, Sonipat, Haryana 131029</h1>"))
            .addTo(map.current);
    }, []);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setsubmitted(true)
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

                setname('')
                setemail('')
                setphone('')
                setmessage('')
            }
            setsubmitted(false)
            settoast(true)
            setTimeout(() => {
                settoast(false)
            }, 2000);
        })
    }

    return (
        <div>
            {toast && <div className='fixed animate__animated animate__zoomIn md:top-32 top-20 font-medium z-50 bg-white text-2xl p-6 rounded-xl max-sm:mx-auto md:right-20 '>feedback sent successfully ! 😀</div>}
            <Banner title={"Contact Us"} />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
                        <div ref={mapContainer} className="h-full max-sm:w-5/6 absolute w-full " ></div>
                        <div className="bg-white w-5/6 max-sm:opacity-0  mx-auto z-10 my-10 flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Plot no-1635, HSIIDC, INDUSTRIAL AREA, Rai, Haryana 131029</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">poddarayurvedicpharmacy@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">(+91) 9971748626</p>
                            </div>
                        </div>
                    </div>
                    {submitted ? <div className='flex justify-center py-[16.85rem] w-full items-center lg:w-1/3 md:w-1/2 bg-white h-full'>
                        <ClipLoader
                            color="orange"
                            loading={submitted}
                            size={80}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div> :
                        <form onSubmit={(e) => handleSubmit(e)} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Send us email and we will get in touch shortly .</p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input value={name} onChange={(e) => setname(e.currentTarget.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input value={email} onChange={(e) => setemail(e.currentTarget.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                <input value={phone} onChange={(e) => setphone(e.currentTarget.value)} type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
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