import React from 'react'
import Product from "./Product"

const Products = ({ ifExists, data: { title, items } }) => {

  return (
    <div className='nike-container'>
      <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold text-slate-900 drop-shadow-lg'>{title}</h2>
      <div className={`grid items-center justify-items-center gap-5 md:gap-7 mt-7 ${ifExists ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'}`}>
        {items?.map((item, i) => (
          <Product {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  )
}

export default Products