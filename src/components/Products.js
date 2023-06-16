import React from 'react'
import Product from "./Product"

const Products = ({ ifExists, data: { title, items } }) => {

  return (
    <div className='nike-container'>
      <h2>{title}</h2>
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, i) => (
          <Product {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  )
}

export default Products