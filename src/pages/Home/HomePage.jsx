import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/heroSection/HeroSection'
import Category from '../../Components/category/Category'
import HomePageProductCard from '../../Components/ProductCardHome/HomePageProductCard'
import Track from '../../Components/track/Track'
import Testimonial from '../../Components/testimonial/Testimonial'

const HomePage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
        <HomePageProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </>
  )
}

export default HomePage
