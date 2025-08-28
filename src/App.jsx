import React from 'react'
import AOSInit from './Pages/AOSInit'
import FAQPage from './Pages/FAQPage'
import BlogPage from './Pages/BlogPage'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import WishPage from './Pages/WishPage'
import ShopPage from './Pages/ShopPage'
import ErrorPage from './Pages/ErrorPage'
import ProductPage from './Pages/ProductPage'
import ScrollToTop from './Pages/ScrollToTop'
import ContactPage from './Pages/ContactPage'
import AboutUsPage from './Pages/AboutUsPage'
import MyAccountPage from './Pages/MyAccountPage'
import Header from './Components/CommonComponents/Header'
import OrderTrackingPage from './Pages/OrderTrackingPage'
import Footer from './Components/CommonComponents/Footer'
import MyContextProvider from './Context/MyContextProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LostPassword from './Components/MyAccountComponents/LostPassword'

const App = () => {
  return (
    <> 
      <BrowserRouter>
        <MyContextProvider>
          <AOSInit />
          <ScrollToTop />
          <Header />  

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/wishlist' element={<WishPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/blog/:blogID' element={<BlogPage />} />
            <Route path='/my-account' element={<MyAccountPage />} />
            <Route path='/product/:productID' element={<ProductPage />} />
            <Route path='/order-tracking' element={<OrderTrackingPage />} />
            <Route path='/my-account/lost-password' element={<LostPassword />} />
          </Routes>

          <Footer />  
        </MyContextProvider>
      </BrowserRouter>

    </>
  )
}

export default App