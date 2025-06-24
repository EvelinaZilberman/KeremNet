import React from 'react';
import './App.css';
import Post from './features/Post/Post';

function App() {
  return (
    <div className="App">
      <Post author={'Max'} date={'27/06/25'} content="hello everyone" likes={4} comments={[{comment: "nice!"}, {comment: "hello to you too"}]}></Post>
    </div>
  );
}

export default App;
