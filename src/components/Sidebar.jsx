import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] h-[100vh] border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
      {/* side bar options */}
      <div className='pt-[50px] pl-[20%] flex flex-col gap-5'> 
        {/* side bar option */}
        <NavLink to='/add' className={({ isActive }) =>
          `flex items-center gap-3 border-[1px] border-solid ${
            isActive ? 'border-[#DC143C] bg-[#e83b5e34]' : 'border-[#a9a9a9]'
          } br-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer`
        }>
          <img src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className={({ isActive }) =>
          `flex items-center gap-3 border-[1px] border-solid ${
            isActive ? 'border-[#DC143C] bg-[#e83b5e34]' : 'border-[#a9a9a9]'
          } br-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer`
        }>
          <img src={assets.order_icon} alt="" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink to='/order' className={({ isActive }) =>
          `flex items-center gap-3 border-[1px] border-solid ${
            isActive ? 'border-[#DC143C] bg-[#e83b5e34]' : 'border-[#a9a9a9]'
          } br-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer`
        }>
          <img src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar