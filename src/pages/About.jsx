import React from 'react'
import background from '../images/About.jpg'

const About = () => {
  return (
   <div>
            <div className='w-full h-[60vh] sm:h-[80vh] lg:h-screen'>
                <img src={background} alt='About' className='w-full h-full obhect-cover' />
            </div>
            <div className='max-w-3xl mx-auto px-4 py-10 text-center'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-4'>About Us</h1>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We are a modern e-commerce platform dedicated to delivering quality
                    products at affordable prices. Our mission is to make online shopping
                    simple, fast, and enjoyable for everyone.
                </p>
            </div>
        </div>
  )
}

export default About