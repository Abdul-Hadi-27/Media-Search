import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className=' py-6 flex justify-between items-center px-10 bg-(--c3)'><Link to='/' className=' text-2xl font-medium '>Media Search</Link>
        
        <div className='flex gap-5 text-base font-medium items-center'>
<Link className='bg-(--c4) active:scale-95 text-(--c1) rounded px-4 py-2'
 to='/'>
 Search
        </Link>
        <Link className='bg-(--c4) active:scale-95 text-(--c1) rounded px-4 py-2'
         to='/collection'>Collection</Link>
        </div>
      </div>
  )
}

export default Navbar