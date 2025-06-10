import { assets } from '../assets/admin_assets/assets'
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

const Addproduct = ({url}) => {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value
    setData(data=>({...data,[name]:value}))
  };

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",data.image);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-4'>
      <form className='gap-[16px] flex flex-col' onSubmit={onSubmitHandler}>
        <div className='gap-[16px] flex flex-col w-[120px]'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>{setImage(e.target.files[0]);
            setData((data) => ({ ...data, image: e.target.files[0] }))
          }
          } className='p-[10px]' type="file" id='image' hidden required/>
        </div>

        {/* Add product name */}
        <div className='gap-[10px] flex flex-col w-[max(40%,280px)]'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} className='p-[10px]' type="text" name='name' placeholder='Type here'/>
        </div>

        {/* Product Description */}
        <div className='gap-[16px] flex flex-col w-[max(40%,280px)]'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} className='p-[10px] gap-[16px] flex flex-col w-[max(40%,280px)]' name="description"  rows="6" placeholder='Write content here'></textarea>
        </div>

        {/* add category price */}
        <div className='flex gap-[30px]'>
          {/* add category */}
          <div>
            <p>Product Category</p>
            <select onChange={onChangeHandler} className='max-w-[120px] p-[10px]' name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          {/* add price */}
          <div>
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} className='max-w-[120px] p-[10px]' type="number" name='price' placeholder='$20'/>
          </div>
        </div>

        <button type='submit' className='max-w-[120px] border-none p-[10px] bg-[#DC143C] rounded-md text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Addproduct