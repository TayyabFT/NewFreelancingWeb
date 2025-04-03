import AutomationSection from '@/components/landing/AutomationSection'
import FeaturesList from '@/components/landing/FeaturesList'
import HeroSection from '@/components/landing/HeroSection'
import InfluencerOutreach from '@/components/landing/InfluencerOutreach'
import PartnershipSection from '@/components/landing/PartnershipSection'
import SocialListing from '@/components/landing/SocialListing'
import VideoGenerator from '@/components/landing/VideoGenerator'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-white '>
    <Navbar/>
    <HeroSection/>
    <PartnershipSection/>
    <AutomationSection/>
    <InfluencerOutreach/>
    <SocialListing/>
    <FeaturesList/>
    <VideoGenerator/>
    </div>
    
    </>
  )
}

export default page
