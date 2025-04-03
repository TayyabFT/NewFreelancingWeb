import AutomationSection from '@/components/landing/AutomationSection'
import HeroSection from '@/components/landing/HeroSection'
import PartnershipSection from '@/components/landing/PartnershipSection'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-white p-6'>
    <Navbar/>
    <HeroSection/>
    <PartnershipSection/>
    <AutomationSection/>
    </div>
    
    </>
  )
}

export default page
