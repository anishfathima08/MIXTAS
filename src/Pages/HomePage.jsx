import React from 'react'
import Carousel from '../Components/HomePageComponents/Carousel'
import Slider from '../Components/HomePageComponents/Slider'
import Card from '../Components/HomePageComponents/Card'
import Brands from '../Components/HomePageComponents/Brands'
import Blog from '../Components/HomePageComponents/Blog'
import NewArrivals from '../Components/HomePageComponents/NewArrivals'
import PopularProducts from '../Components/HomePageComponents/PopularProducts'

const HomePage = () => {
    return (
        <>
            <Carousel />
            <Slider />
            <NewArrivals />
            <PopularProducts />
            <Card />
            <Brands />
            <Blog />
        </>
    )
}

export default HomePage