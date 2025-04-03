import HeroSection from '@/components/landing/HeroSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-white p-6'>
    <Navbar/>
    <HeroSection/>
    </div>
    
    </>
  )
}

export default page
