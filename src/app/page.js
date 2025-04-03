import AutomationSection from '@/components/landing/AutomationSection'
import Cta from '@/components/landing/Cta'
import Faq from '@/components/landing/Faq'
import FeaturesList from '@/components/landing/FeaturesList'
import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import InfluencerOutreach from '@/components/landing/InfluencerOutreach'
import PartnershipSection from '@/components/landing/PartnershipSection'
import PremiumFeatures from '@/components/landing/PremiumFeatures'
import PricingTable from '@/components/landing/PricingTable'
import SocialListing from '@/components/landing/SocialListing'
import Testimonials from '@/components/landing/Testimonials'
import TikTokSales from '@/components/landing/TikTokSales'
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
    <TikTokSales/>
    <PricingTable/>
    <PremiumFeatures/>
    <Testimonials/>
    <Faq/>
    <Cta/>
    <Footer/>
    </div>
    
    </>
  )
}

export default page
