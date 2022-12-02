import React from 'react'
import "./Sidebar.css"

const CategoryItem = ({title, quantity}) => {
  return (
    <div>
      <input type="checkbox"/>
      <label>{title} ({quantity})</label>
    </div>
  )
}

const Sidebar = () => {
  const categories = ["Toys", "Eletronics", "Clothes", "Housewares", "LifeStyles", "PC&Laptop", "Watch","Health","Sport&Traveling","Bookstore" ]
  return (
    <div className='sidebar'>
      <h1>Category</h1>
      {categories.map( category => (
        <CategoryItem title={category} quantity={44} key="category" />
      ))}
    </div>
  )
}

export default Sidebar