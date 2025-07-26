// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="">
//                 <ul className='flex justify-center gap-6 text-lg font-bold '>
//                     <Link href='/'><li className='hover:text-amber-300'>Home</li></Link>
//                     <Link href='/about'><li className='hover:text-amber-300'>About</li></Link>
//                     <Link href='/services'><li className='hover:text-amber-300'>Services</li></Link>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); // For checking active path

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Weather App</h1>
      <div className="space-x-4">
        <Link href="/">
          <span className={isActive('/') ? 'underline' : ''}>Home</span>
        </Link>
        <Link href="/favorites">
          <span className={isActive('/favorites') ? 'underline' : ''}>Favorites</span>
        </Link>
        <Link href="/login">
          <span className={isActive('/login') ? 'underline' : ''}>Login</span>
        </Link>
        <Link href="/register">
          <span className={isActive('/register') ? 'underline' : ''}>Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
