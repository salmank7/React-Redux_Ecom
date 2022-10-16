import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed top-0 w-[100%] border-b-2 py-4 shadow-sm bg-white'>
        <div className='container px-2 sm:px-0 flex items-center justify-between'>
          <Link to='/'>
            <h1 className='text-[1.5rem] md:text-[2.5rem]'>Amazonis</h1>
          </Link>
            <div className='flex items-center space-x-4'>
            <button className='border-2 px-5 py-2 rounded-lg border-black hover:text-white hover:bg-black transition-all'>Sign Up</button>
            <button className='border-2 px-5 py-2 rounded-lg border-black hover:text-white hover:bg-black transition-all'>Login Here</button>
            </div>
        </div>
    </div>
  )
}

export default Header