// import React, {useState} from 'react'
// import AOSInit from './pages/AOSInit'
// import HomePage from './pages/HomePage'
// import FAQ_Page from './pages/FAQ_Page'
// import CartPage from './pages/CartPage'
// import BlogPage from './pages/BlogPage'
// import ShopPage from './pages/ShopPage'
// import ErrorPage from './pages/ErrorPage'
// import ProductPage from './pages/ProductPage'
// import ScrollToTop from './pages/ScrollToTop'
// import AboutUsPage from './pages/AboutUsPage'
// import ContactPage from './pages/ContactPage'
// import WishlistPage from './pages/WishlistPage'
// import MyAccountPage from './pages/MyAccountPage'
// import { all_products_data } from './assets/assets'
// import OrderTrackingPage from './pages/OrderTrackingPage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import LostPassword from './components/MyAccountComponents/LostPassword'

// const App = () => {

//   let products_len=Object.keys(all_products_data).length;
  
//   let [new_array,setNewArr]=useState([]);
//   for(let i=0;i<=products_len;i++){
//     new_array[i]=0;
//   }

//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <AOSInit />
//       <Routes>
//         <Route path ='*' element={<ErrorPage/>} />
//         <Route path ='/' element={<HomePage />} />
//         <Route path ='/shop' element={<ShopPage />} />
//         <Route path ='/faqs' element={<FAQ_Page />} />
//         <Route path ='/blog/:id' element={<BlogPage />} />
//         <Route path ='/about-us' element={<AboutUsPage />} />
//         <Route path ='/wishlist' element={<WishlistPage />} />
//         <Route path ='/contact-us' element={<ContactPage/>} />
//         <Route path ='/my-account' element={<MyAccountPage />} />
//         <Route path ='/order-tracking' element={<OrderTrackingPage />} />
//         <Route path ='/my-account/lost-password' element={<LostPassword/>}/>
//         <Route path ='/cart' element={<CartPage  new_array={new_array} setNewArr={setNewArr}/>} />
//         <Route path ='/product/:id' element={<ProductPage new_array={new_array} setNewArr={setNewArr} />} />
//       </Routes>
//     </BrowserRouter>
    
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App