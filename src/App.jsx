import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Addproduct from './pages/Addproduct'
import Listproduct from './pages/Listproduct'
import Order from './pages/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url="http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr className='border-none h-[1px] bg-[#a9a9a9]'/>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Addproduct url={url}/>}></Route>
          <Route path='/list' element={<Listproduct url={url}/>}></Route>
          <Route path='/order' element={<Order url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App