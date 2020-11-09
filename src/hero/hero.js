import React,{useState} from 'react';
import './hero.css';
import Logo from '../logo.png';
import Search from '../search.png';
import Card from '../UIElements/card/Card';
import {BrowserRouter as Router ,NavLink} from 'react-router-dom';
const Hero=(props)=>{
    const [search,setSearch]=useState(false);
	const openSearch=()=>{

		setSearch(true);

	};
	const searchClass = search? 'searchInput active':'searchInput' ;
	return(
		
		<Card >
		<img classname='logo' src={Logo}/>
		<div className='heroNav'>
		<div>
		<Router>
		
		<NavLink to ='/' exact>Home</NavLink>
		
		<NavLink to ='/post' >Posts</NavLink>
		
		
		</Router>
		</div>
		<div className='search'>
		<input className={searchClass} type='text' placeholder='Search'/>
		<img onClick={openSearch} src={Search}/>
		</div>
		</div>
		</Card>
		
		)

}

export default Hero;