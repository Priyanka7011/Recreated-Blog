import React from 'react';
import Card from '../UIElements/card/Card';
import AboutImage from '../assets/aboutImage.jpg';
import Clock from '../assets/clock.png'
import './sidebar.css';

const Sidebar=(props)=>{
	return(
		<div className='sidecontainer'>
		<Card>
		<div className='cardTitle'>ABOUT US</div>
		<img className='picture1' src={AboutImage}/>
		< p className='text'>
		Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. 
		Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
		</p>
		</Card>

        <div className='recent'>
		<Card>
		<div className='cardTitle'>SOCIAL NETWORK</div>
		<div className='links'>social links</div>
		</Card>
		</div>

        <div className='recent'>
		<Card>
		<div className='cardTitle'>RECENT POST</div>
		<div className='menu'>
		<a className='varpost' href="#">Fitness Mantra To live Fit Life</a>
		<div className='detail'><p>JULY 21 2020</p></div>
		<hr/>
		<br/>
		<a className='varpost' href="#">Beautfiul and Special Moment</a>
		<div className='detail'><p>JUNE 03 2020</p></div>
		<hr/>
		<br/>
		<a className='varpost' href="#">Sliding My way to Life</a>
		<div className='detail'><p>JULYY 02 2020</p></div>
		<hr/>
		<br/>


		
		</div>

		</Card>
		</div>
		
		</div>
		)

}

export default Sidebar;