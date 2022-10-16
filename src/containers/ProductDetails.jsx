import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
  const product = useSelector((state)=> state.product)
  const { image, title, price, category, description } = product;
  const {productId} = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=> {
      console.log("Err", err)
    });
    dispatch(selectedProduct(response.data))
    console.log(response.data)
  }
  useEffect(()=> {
    if(productId && productId != "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts())
    }
  }, [productId])


    return (
    <div className='container max-h-[100vh] w-full border sm:mt-4'>
      {Object.keys(product).length === 0 ? (
        <div className='text-4xl h-[80vh] flex flex-col justify-center items-center'>
          <p>...Loading</p>
          <span className='bg-red-900 h-[4px] w-[80px] animate-ping mt-4'></span>
        </div>
      ) : (

      <div className='flex flex-col gap-4 sm:flex-row px-10 justify-end'>
        <div className='flex-1'>
        <img src={image} className='h-[450px] md:h-[600px] mx-auto' alt={title} />
      </div>
      <div className='flex-1'>
        <p className='text-white bg-black p-4 rounded-lg uppercase mt-4'>{title}</p>
        <p className='text-gray-500 text-[14px] my-3'>{description}</p>
        <h1>{category}</h1>
        <p className='text-[2rem] font-bold mt-2'>${price}</p>
      <div className='flex mt-4 space-x-2'>
          <button className='border py-2 px-4 text-[0.875rem] rounded-lg border-black hover:text-white hover:bg-black transition-all'>Buy Now</button>
          <button className='border py-2 px-4 text-[0.875rem] rounded-lg border-black hover:text-white hover:bg-black transition-all'>Add to Cart</button>
        </div>
      </div>
       </div>
        )}

    </div>
  )
}

export default ProductDetails