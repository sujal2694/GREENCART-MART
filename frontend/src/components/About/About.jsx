import React from 'react'
import './About.css'
import { assets } from '../../greencart_assets/assets'

const About = () => {
  return (
    <div className='about'>
      <div className="about-text">
        <h1>Why We Are the Best?</h1>
        <p>Fastest Delivery<span>Groceries delivered in under 30 minutes.</span></p>
        <p>Freshness Gaaranteed<span>Fresh produce straight from the source.</span></p>
        <p>Affordable Prices<span>Quality groceries at unbeatable prices.</span></p>
        <p>Trusted by Thousands<span>Loved by 100,000+ happy customers.</span></p>
      </div>
      <img src={assets.bottom_banner_image} alt="" />
      <div className="feedback">
        <h1>Never Miss a Deal!</h1>
        <p>Subscribe to get the fastest offers, new arrivals and exclusive discounts.</p>
        <div className="input-btn">
            <input type="text" placeholder='Enter valid email' required/>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default About