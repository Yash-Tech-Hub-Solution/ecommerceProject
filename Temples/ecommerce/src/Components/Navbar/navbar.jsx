import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/shopping-bag.png'
import cart_icon from '../Assets/addShoppingCartIcon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>GeniusMart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar