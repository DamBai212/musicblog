import React from 'react';
import FeaturedPost from './FeaturedPost';
import './App.css';

function App() {
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

export default App;
