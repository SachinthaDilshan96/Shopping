import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import logo from './Images/logo.png';
import SlideShow from './components/SlideShow';
import Cart from './components/Cart';
import Items from './components/Items';
import Popup from 'reactjs-popup';


function HomeScreen({cart}){

const handleClick=(item)=>{
  cart.push(item);
  console.log(cart); 
};
  return(
          <div >
            <div className="App-header">
              <div className="App-header-left">
              <a  href="/login"><img className="logo" src={logo}/></a>
                 <div className="search"> </div>
              </div>
              <div className="App-header-right">
              <a  href="/login"><button className="Buttons" > Login </button></a>
              <div className='cart'>
                <span>
                  <a href='/mycart'><img src={require('./Images/cart.png')} className="cart-plus" /></a>
                </span>
                <span>0</span>
              </div>
              </div>
            </div>
            <div className="container">
            <div className='slidercontainer'>
            <SlideShow/>
            </div>
            <div className="itemcontainer">
            <Items handleClick={handleClick}/>
            </div>
            </div>
            </div>
  );
};
function LoginScreen(){
  return(
    <div>
      <Login/>
    </div>
  );
}
function CartScreen({cart}){
  console.log(cart)
  return(
    <div>
      <Cart cart={cart} />
    </div>
  );
}
function App() {
  const [cart,setCart]=useState(['this']);
  return (
    <div>
      <Router> 
           <Routes>
                  <Route exact path='/' element={< HomeScreen cart={cart} />}></Route>
                 <Route exact path='/login' element={< LoginScreen />}></Route>
                 <Route exact path='/mycart' element={< CartScreen cart={cart} />}></Route>
          </Routes>
         
       </Router>
    </div>
     
  );
}

export default App;
