import React from 'react';
import './post.css';
import BlogPost from './blogpost';
import Sidebar from './sidebar';
import {withRouter} from 'react-router-dom';
const Post=(props)=>{
	return(
		<div className='mainBlog'>
	     <BlogPost/>
	     <Sidebar/>
	     </div>
		)

}

export default  withRouter(Post);