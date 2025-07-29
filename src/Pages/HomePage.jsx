// import React from 'react'
// import Card from '../components/HomePageComponents/Card'
// import Blog from '../components/HomePageComponents/Blog'
// import Slider from '../components/HomePageComponents/Slider'
// import Brands from '../components/HomePageComponents/Brands'
// import Footer from '../components/HomePageComponents/Footer'
// import Carousel from '../components/HomePageComponents/Carousel'
// import HomePageNav from '../components/HomePageComponents/HomePageNav'
// import NewArrivals from '../components/HomePageComponents/NewArrivals'
// import PopularProducts from '../components/HomePageComponents/PopularProducts'
// import { slider_data, carousel_data,  blog_data, brand_logos, all_products_data } from '../assets/assets'


// const HomePage = () => {

//   return (
//     <>
//       <HomePageNav products={all_products_data}/> 
//       <Carousel slides={carousel_data}/>
//       <Slider slides={slider_data}/>
//       <NewArrivals new_arrivals={all_products_data}/>
//       <Card />
//       <PopularProducts popular_products={all_products_data}/>
//       <Brands slides={brand_logos}/>
//       <Blog blog={blog_data} />
//       <Footer />  
//     </>
//   )
// }

// export default HomePage

import React from 'react'
import HomeNavBar from '../Components/CommonComponents/HomeNavBar'

const HomePage = () => {
  return (
    <>
      <HomeNavBar />
    </>
  )
}

export default HomePage