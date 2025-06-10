import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const Listproduct = ({url}) => {
  const [list,setList]=useState([]);

  const fetchList=async()=>{
    const res=await axios.get(`${url}/api/food/list`);
    console.log(res.data);
    if(res.data.success){
      setList(res.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood=async(foodId)=>{
    const res=await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(res.data.success){
      toast.success(res.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='gap-[16px] flex flex-col w-[70%] m-10'>
      <p>All Food List</p>
      <div>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-solid border-[#cacaca] text-[13px] list-table-format sm-500:hidden md:grid'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item,i)=>{
          return (
            <div key={i} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-solid border-[#cacaca] text-[13px] list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" className='image'/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='cursor-pointer' onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Listproduct