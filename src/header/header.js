import React from 'react';
import './header.css';
import Mail from '../assets/mail.png'
const Header=()=>{
	return(
		<header className='Navbar' >
		<nav className='menu' >
		
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Contact Us</a>

		
		</nav>
		<div className='mediaLinks'>
		</div>

		</header>
		)

}

export default Header;