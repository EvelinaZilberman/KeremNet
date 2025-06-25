import React from 'react';
import './App.css';
import Post from './features/Post/Post';

function App() {
  return (
    <div className="App">
      <Post author={'Max'} date={'27/06/25'} content="hello everyone" likes={4}
       comments={[
          {author: 'Mark', content: 'nice!', likes: 1}, 
          {author: 'Jess', content: "hello to you too", likes: 5}
        ]}
      />
    </div>
  );
}

export default App;
