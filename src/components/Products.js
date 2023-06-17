import React from 'react'
import Product from "./Product"

const Products = ({ ifExists, data: { title, items } }) => {

  return (
    <div className='nike-container pt-20'>
      <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h2>
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, i) => (
          <Product {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  )
}

export default Products