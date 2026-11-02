'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { assets } from '../../lib/admin-assets'

const Sidebar = () => {
  const pathname = usePathname()

  // NavLink's injected `active` class (styled by admin CSS) is applied
  // manually when the pathname matches, exactly as the original did.
  const linkClass = (to, extra = '') =>
    `flex items-center gap-3 border border-t-gray-300 border-r-0 px-3 py-2 rounded-l${extra}${pathname === to ? ' active' : ''}`

  return (
    <div className='w-[18%] min-h-screen border-r-2 '>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <Link className={linkClass('/admin/add')} href="/admin/add">
            <img src={assets.add_icon} className='w-5 h-5' alt="" />
            <p className='hidden md:block'>Add Product</p>

            </Link>
            <Link className={linkClass('/admin/list', ' shadow')} href="/admin/list">
            <img src={assets.order_icon} className='w-5 h-5' alt="" />
            <p className='hidden md:block'>List items</p>

            </Link>
            <Link className={linkClass('/admin/orders')} href="/admin/orders">
            <img src={assets.order_icon} className='w-5 h-5' alt="" />
            <p className='hidden md:block'>Orders</p>

            </Link>
        </div>

    </div>
  )
}

export default Sidebar
