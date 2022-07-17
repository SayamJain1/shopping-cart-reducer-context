import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
      <div className='w-full h-20 bg-orange-500 flex justify-center'>
          <div className='container flex justify-around items-center'>
              <h1 className='text-2xl font-bold uppercase'><Link to='/'>Store</Link></h1>
              <ul className='flex justify-between w-24 font-bold '>
                  <li className='hover:text-blue-300'>
                      <Link to='/'>Home</Link>
                  </li>
                  <li className='hover:text-blue-300'>
                      <Link to='/cart'>Cart</Link>
                  </li>
              </ul>
          </div>
    </div>
  )
}

export default Header