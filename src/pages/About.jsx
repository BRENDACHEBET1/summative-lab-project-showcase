import React from 'react'
import background from '../images/About.jpg'

const About = () => {
  return (
   <div>
            <div className='relative w-full h-[60vh] sm:h-[80vh] lg:h-screen'>
                <img src={background} alt='About' className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-0 left-0 w-full bg-black/50 text-white px-6 py-6 flex flex-col items-center text-center'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-2'>About Us</h1>
                <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                    We are a modern e-commerce platform dedicated to delivering quality
                    products at affordable prices. Our mission is to make online shopping
                    simple, fast, and enjoyable for everyone.
                </p>
            </div>
        </div>
  )
}

export default About