import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import {assets} from '../assets/admin_assets/assets.js'

const Order = ({url}) => {
  const [orders,setOrders]=useState([]);
  const fetchAllOrders=async()=>{
    const res=await axios.get(url+"/api/order/list");
    if(res.data.success){
      setOrders(res.data.data);
      console.log(res.data.data)
    }
    else{
      toast.error("Error");
    }
  }

  const statusHandler = async (e, orderId) => {
    const newStatus = e.target.value;
  
    try {
      const res = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus,
      });
  
      if (res.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success("Order status updated successfully!");
      } else {
        toast.error("Failed to update order status.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the order status.");
    }
  };

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='my-4 mx-6'>
      <h3>Order Page</h3>
      <div>
        {orders.map((order,i)=>{
          return <div key={i} className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr] items-start gap-[30px] border-solid border-[1px] border-[#DC143C] p-[20px] my-[30px] text-[14px] text-[#505050] order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='font-semibold order-item-food'>{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+" x "+item.quantity
                }
                else{
                  return item.name+" x "+item.quantity+", "
                }
              })}</p>
              <p className='font-semibold mt-[30px] mb-[5px]'>{order.address.firstName+" "+order.address.lastName}</p>
              <div className='mb-[10px]'>
                <p>{order.address.street+", "}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(e)=>statusHandler(e,order._id)}  value={order.status} className='bg-[#e83b5e34] border-solid border-[1px] border-[#DC143C] w-[max(10vw,120px)] p-[10px] outline-none rounded-md'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        })}
      </div>
    </div>
  )
}

export default Order