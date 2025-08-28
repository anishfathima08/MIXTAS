import React from 'react'
import ProductBody from '../Components/ProductPageComponents/ProductBody'
import RelatedProducts from '../Components/ProductPageComponents/RelatedProducts'
import { useParams } from 'react-router-dom'
import { all_products_data } from '../assets/assets'

const ProductPage = () => {
  const { productID } = useParams();
  const selectedProduct = all_products_data.find(p => p.id.toString() === productID);

  return (
    <>
      <ProductBody selectedProduct={selectedProduct} />
      <RelatedProducts />
    </>
  )
}

export default ProductPage