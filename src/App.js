import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import logo from './Images/logo.png';
import SlideShow from './components/SlideShow';
import Cart from './components/Cart';
import Items from './components/Items';
import Signup from './components/Signup';

function HomeScreen({cart}){
const handleClick=(item)=>{
  cart.push(item);
  //console.log(cart); 
};
const [modal,setModal]=useState(false);
const toggleModal=()=>{
  setModal(!modal)
}

let sum=0;

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
                  <a ><img src={require('./Images/cart.png')} onClick={toggleModal} className="cart-plus" /></a>
                </span>
                <span>0</span>
              </div>
              {modal && (  <div className='modal'>
                <div className="overlay">
                  <div className="modal-content">
                    <h2 style={{textAlign:'left'}}>My Cart</h2>
                    <table>
                      <tr style={{textAlign:'center'}}><th></th><th>Item</th><th>Price</th></tr>
                        {Object.values(cart).forEach((x)=>sum+=x.price)}
                        { 
                           cart.map((item) =>
                              (<tr>
                                <td><img style={{height:'70px',width:'70px'}} src={item.img}/></td>
                                <td><h4>{item.title}  </h4></td>
                                <td><h4>${item.price} </h4></td>
                              </tr>
                              ))}

                    </table>
                    
                  
                       <h4>Total ${sum}</h4>
                    <button className='close-modal' onClick={toggleModal}>Close</button>

                  </div>
                </div>
              </div>) }
            
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
  //console.log(cart)
  return(
    <div>
      <Cart cart={cart} />
    </div>
  );
}

function App() {
  const [cart,setCart]=useState([]);
  return (
    <div>
      <Router> 
           <Routes>
                  <Route exact path='/' element={< HomeScreen cart={cart} />}></Route>
                 <Route exact path='/login' element={< LoginScreen />}></Route>
                 <Route exact path='/mycart' element={< CartScreen cart={cart} />}></Route>
                 <Route exact path='/details/:itemid' element={< Details  />}></Route>
                 <Route exact path='/signup' element={< Signup  />}></Route>
          </Routes>
         
       </Router>
    </div>
     
  );
}

export default App;
