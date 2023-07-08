import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);

    const renderList = products.map((product)=> {
      const { id, title, image, price, category } = product;
      return (
       <div className='flex flex-col border-[3px] shadow-lg p-4' key={id}>
        <div className='max-h-[100%] sm:h-[300px]'>
          <img className='sm:h-full' src={image} alt={title} />
        </div>
        <div className='flex flex-col mt-4'>
          <h1 className=''>{title}</h1>
          <p className='text-gray-500 text-[14px]'>{category}</p>
          <p className='text-yellow-600'>${price}</p>
        </div>
        <div className='flex mt-4 space-x-2'>
          <Link to={`/product/${id}`}>
          <button className='border py-2 px-4 text-[0.875rem] rounded-lg border-black hover:text-white hover:bg-black transition-all'>View Details</button>
          </Link>
          <button className='border py-2 px-4 text-[0.875rem] rounded-lg border-black hover:text-white hover:bg-black transition-all'>Add to Cart</button>
        </div>
       </div>
      )

    });
    return (
      <>
      {renderList}
      </>
    );
}

export default ProductComponent