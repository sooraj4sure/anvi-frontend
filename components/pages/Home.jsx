'use client'
import React from 'react'
import Hero from '../Hero'
import LatestCollection from '../LatestCollection'
import BestSeller from '../BestSeller'
import OurPolicy from '../OurPolicy'
import { NewsLetter } from '../NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy />
      <NewsLetter/>
    </div>
  )
}

export default Home
