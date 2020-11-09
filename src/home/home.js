import React from 'react';
import Header from '../header/header';
import Hero from '../hero/hero'
import Homef from '../assets/home1.jpg';
import HomeS from '../assets/home2.jpg';
import HomeT from '../assets/home1.jpg';
import HomeF from '../assets/home4.jpg';
import Homefi from '../assets/home5.jpg';
import './home.css';

const HomePage=()=>{
	return(
		<div  >
		<div>
        <img className='first' src={Homef}/>
        <div className='fcaption'> Memories from the Last Summer</div>

        </div>
        <div>
        <img className='fourth' src={HomeF}/>
         <div className='Fcaption'> An Enjoyful Day at Beach</div>
        </div>
        <div>
        <img className='fifth' src={Homefi}/>
         <div className='ficaption'> Modern Business School Fashion</div>
        </div>
        <div>
        <img className='second' src={HomeS}/>
         <div className='Scaption'> Beautiful and Special Moment</div>
        </div>
        
	
		</div>
		)

}

export default HomePage;