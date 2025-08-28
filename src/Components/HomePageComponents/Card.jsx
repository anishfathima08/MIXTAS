import React, { useContext } from 'react'
import { myContext } from '../../Context/MyContextProvider'

const Card = () => {

  const { navigate } = useContext(myContext)

  return (
    <>
      <div className='container cards my-5'>
        <div className='card1 text-end p-lg-5 p-3'>
          <p className='card-title fw-medium mt-4 pt-lg-5 pt-3'><i>Urban Elegance</i></p>
          <h1>Where City Style Meets <br /> Sophistication</h1>
          <button onClick={() => navigate('/shop')} className='btn rounded-0 btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>

        <div className='card2 text-end text-white p-5'>
          <p className='card-title fw-medium mt-5'><i>Urban Elegance</i></p>
          <h1 className='fs-1'>Elevate your <br /> Everyday Look</h1>
          <button onClick={() => navigate('/shop')} className='btn rounded-0 btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>

        <div className='card3 text-center text-white p-5'>
          <h3 className='fw-medium mt-5 mt-lg-4'>Mastering the Art of  Menswear</h3>
          <h1 className='display-1 fw-bold card-title'>50%</h1>
          <button onClick={() => navigate('/shop')} className='btn rounded-0 btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>
        
        <div className='card4 text-center text-white p-5'>
          <p className='card-title fw-medium'><i>Timeless Classics</i></p>
          <h1>A Collection of <br /> Wardrobe <br /> Essentials</h1>
          <button onClick={() => navigate('/shop')} className='btn rounded-0 btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Card