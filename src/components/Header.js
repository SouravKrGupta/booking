import React from 'react';

//import Link
import {Link} from 'react-router-dom'
//import logo
import Logo from '../assets/img/logo.svg'
const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className='container mx-0.5 flex justify-between items-center'>
{/* Logo */}
<Link to='/'>
  <img src={Logo} alt=""/>
</Link>

{/* Button */}
<div className='flex items-center gap-6'>
  <Link to='' className='hover:bg-violet-900 hover:text-white  text-black px-4 py-3 rounded-lg transition border'>Login
  </Link>
  <Link to='' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>Signup</Link>
</div>
    </div>
  </header>;
};

export default Header;
