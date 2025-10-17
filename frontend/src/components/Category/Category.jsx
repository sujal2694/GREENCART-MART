import React from 'react'
import './Category.css'
import {Link} from 'react-router-dom'
import { categories } from '../../greencart_assets/assets'

const Category = () => {
  return (
    <div className='categories'>
      <h1>Categories</h1>
      <div className="category-boxes">
        {categories.map((item,index)=>{
          return(
            <Link to={item.path} key={index}>
              <div style={{backgroundColor: item.bgColor}} className="box">
                <img src={item.image} alt={item.text} />
                <p>{item.text}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Category