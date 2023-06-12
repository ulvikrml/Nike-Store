import React from 'react'

const PopularProducts = () => {
    return (
        <section>
            <h2>Popular Sales</h2>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h4>Nike Adapt BB 2.0</h4>
                    <p>MEN Running Shoes</p>
                    <div className="flex flex-row">
                        <p>$200</p>
                        <p>4.9</p>
                    </div>
                    <div className="flex flex-row">
                        <p>add</p>
                        <p>Buy Now</p>
                    </div>
                </div>
                <div>
                    <img className='w-[100px]' src="./images/nike-adapt-bb.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default PopularProducts