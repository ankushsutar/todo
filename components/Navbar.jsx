import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 rounded-lg'>
        <Link className='text-white font-bold' href={"/"}>TODO LIST</Link>
        <Link className='bg-white p-2 rounded' href={"/addTopic"}>Add Todo </Link>
    </nav>
  )
}

export default Navbar