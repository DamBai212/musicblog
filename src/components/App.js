import React, { Component } from 'react';
import FeaturedPost from './FeaturedPost';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       dataReceived: false,      
       posts: [],
       authors: [],
       featuredPostIndex: 0,
       otherPosts: [],
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          My Music Blog
        </header>
      <div className="featuredPost">
          <FeaturedPost/>
      </div>
      <div className="spotifyPlayer">
        <p>Spotify player here</p>
      </div>
      <div className="otherPosts">
        <p>Other posts</p>
      </div>
        <footer className="footer">
          cosmic footer here
        </footer>
      </div>
    );
  }
  
  }
  
export default App;
