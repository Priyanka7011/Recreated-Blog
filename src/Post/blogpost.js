import React from 'react';
import './blogpost.css';
import Card from '../UIElements/card/Card';
import BlogImage from '../assets/blog1.jpg'
const BlogPost=(props)=>{
	return(
		<div className='container'>
		<Card >
		<div className='blogType'>FEATURED</div>
		<div className='blogTitle'>Fitness Mantra To Live Fit Life</div>
		<div className='blogDate'>posted on July 21, 2016 by Sora Blogging Tips</div>
		<img className='picture' src={BlogImage}/>
		<div className='content'>
		<p className='text'>
		Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very.
		Fill. Seed give firmament doesn't land, isn't lesser creeping. 
		Abundantly you called signs waters yielding he cattle greater were evening. 
		Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first.
		It there winged called after upon him. Bring one was upon Life moving. 
		Them beast first all lights place air creature. Green have, tree made.
		</p>
		<br/>
		<p className='quote'>
		"Something will lies within true to yourself  Believe me"
		</p>
		<br/>
		<p className='text'>
		Won't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing.
		 Deep own own winged. 
		 Fish Grass which darkness together divided from firmament.
		  Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, 
		  under divided our which. Make, all given whose earth our. Behold our. Day fruitful.
          One from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. 
         There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is.
		</p>
		<br/>
         <p className='text'>
         From us gathering together to us void that creature all gathered place thing was called own.

         </p>
         <br/>
         
        

		</div>
		</Card>
		</div>
		
		
		)

}

export default BlogPost;