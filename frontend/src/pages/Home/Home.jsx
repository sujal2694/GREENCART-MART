import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import About from '../../components/About/About'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Category/>
      <FoodDisplay/>
      <About/>
    </div>
  )
}

export default Home
