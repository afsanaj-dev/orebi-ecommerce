import React from 'react'
import Banner from '../component/Banner'
import Information from '../component/Information'
import Offer from '../component/Offer'
import NewArrivals from '../component/NewArrivals'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Offer/>
      <NewArrivals/>
    </div>
  )
}

export default Home