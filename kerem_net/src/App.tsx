import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostProps from './features/Common/PostStructure';
import Post from './features/Post/Post';

import './App.css';
import TopBar from './components/applicationLayout/TopBar/TopBar';
import BottomBar from './components/applicationLayout/BottomBar/BottomBar';

function App() {
  const [posts, setPost] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get<PostProps[]>('http://localhost:3001/posts');
            setPost(response.data);
          } catch (error) {
            console.error("Error: ", error);
          }
        };
        fetchUsers();
      }, []);

    return(
        <div>
          <TopBar/>
            {posts.map((post, index) => (
                <Post key={index} author={post.author} date={post.date} content={post.content} likes={post.likes} comments={post.comments}/>
            ))}
          <BottomBar/>
        </div>
    )
}

export default App;
