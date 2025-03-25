import React from 'react'            //home page
import Hero from "../Components/Hero/Hero"
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>  {/*mounting component hero to shop page*/}
      <Popular/>  {/*mounting component popular to shop page */}
      <Offers/>
      <NewCollections/>
      <NewsLetter/>

    </div>
  )
}

export default Shop
