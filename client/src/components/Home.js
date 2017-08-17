import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="row post">
      <div className="col s12 post-top">
        <div className="row">
          <div className="col s12">
            <h2>Welcome to MERN Blogger</h2>
            <h3 className="flow-text">A blog about developing a Full Stack Blog from scratch</h3>
          </div>
        </div>
      </div>
      <div className="col s12 post-body">
        <p>
        Hello fellow coders,<br /><br />
      Like many other self taught coders, I had a hard time with finding a project that is fun, maintainable and has opportunity to grow at the same time.
        That's why I decided to start this blog, where I can write down my progress, share my thoughts and ideas, and - hopefully - meet likeminded people and learn from them.<br />
        </p>
        <p>
          Since I started teaching myself Web Development, my focus was mainly on Front End languages. For this blog however, I will take care of of the Back End as well.
        </p>
        <h5>The Stack</h5>
        <ul>
          <li><strong>ReactJS</strong> is the Front End Framework of my choice - very robust and much fun!</li>
          <li>The Data will be stored on a <strong>MongoDB</strong> database.</li>
          <li>For the Back End, I decided to go for a <strong>Node/Express</strong> server</li>
        </ul>
        <h5>Libraries/Technologies</h5>
        <ul>
          <li><a href="http://materializecss.com/" target="_blank" rel="noopener noreferrer">Materialize CSS</a> will be responsible for the general feel and look of the page.</li>
          <li>Flexbox is used, wherever I see fit.</li>
          <li>The <a href="https://github.com/mzabriskie/axios" target="_blank" rel="noopener noreferrer">axios</a> library makes async requests to the server easy.</li>
          <li>To easily display the blog psots, I use <a href="https://github.com/rexxars/react-markdown" target="_blank" rel="noopener noreferrer">react-markdown</a>,
            a React Component that converts Markup to HTML in a very convenient way.</li>
        </ul>
        <p>
          If you like coding as much as I do, want to read some of my code, learn or give input, just start by reading the first post or simply <Link to="/posts/">browse all posts</Link> to find a topic you are interested in.
        </p>
        <Link to="posts/5995ce03a3bd94142c90a460/" className="btn">Read First Post</Link>
      </div>
    </div>
  );
}

export default Home;
