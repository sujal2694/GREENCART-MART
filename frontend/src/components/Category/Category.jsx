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
            <Link to={item.path}><div style={{backgroundColor: item.bgColor}} className="box" key={index}>
              <img src={item.image} alt="" />
              <p>{item.text}</p>
            </div></Link>
          )
        })}
      </div>
    </div>
  )
}

export default Category
