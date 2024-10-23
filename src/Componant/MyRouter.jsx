import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
// import Menu from './Menu';
import Review from './Review';
// import Order from './Order';
import MyOffCanvas from './MyOffCanvas';
import Alldish from './Alldish';
import AddDish from './AddDish';

const MyRouter = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      <MyOffCanvas/>

        <Routes>
          <Route path='/' element={<Home/>}/>
           {/* <Route path='/menu' element={<Menu/>}/> */}
           <Route path='/review' element={<Review/>}/>
           {/* <Route path='/order' element={<Order/>}/> */}
           <Route path='/alldish' element={<Alldish/>}/>
           <Route path='/adddish' element={<AddDish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRouter
