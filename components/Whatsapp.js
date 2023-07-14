/* eslint-disable @next/next/no-img-element */
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919971748626/?text=Hii"
      className="fixed right-4 bottom-4 p-4 bg-green-500 text-white z-50 rounded-full shadow-lg hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
     <img className='w-[2em]' src='/whatsapp.svg' alt='whatsapp icon'/>
    </a>
  );
};

export default WhatsAppButton;
