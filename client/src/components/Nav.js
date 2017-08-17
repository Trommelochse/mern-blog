import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="light-blue darken-3">
      <div className="nav-wrapper">
        <span href="#" className="brand-logo hide-on-med-and-down "><img src="http://clemensjanes.com/mern-blog/img/react-materialize-logo.svg" alt="React Material Logo"></img>MERN Blogger</span>
        <ul id="nav-mobile" className="right grey-text">
          <li><Link to="/posts">Browse Posts</Link></li>
          <li><a href="https://github.com/Trommelochse/mern-blog">Source</a></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
