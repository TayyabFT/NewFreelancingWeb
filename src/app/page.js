import HeroSection from '@/components/landing/HeroSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-gray-900 to-green-900 min-h-screen flex flex-col items-center justify-center text-white p-6'>
    <Navbar/>
    <HeroSection/>
    </div>
    
    </>
  )
}

export default page
