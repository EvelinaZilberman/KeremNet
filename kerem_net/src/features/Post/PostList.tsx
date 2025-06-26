import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

import PostProps from '../Common/PostStructure';
import Post from './Post';


const PostList: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get<PostProps[]>('http://localhost:3000/posts');
            setPosts(response.data);
          } catch (error) {
            console.error("Error: ", error);
          }
        };
        fetchUsers();
      }, []);

    return(
        <div>
            {posts.length == 0 ? <CircularProgress/>: posts.map((post, index) => (
                <Post key={index} author={post.author} date={post.date} content={post.content} likes={post.likes} comments={post.comments}/>
            ))};
        </div>
    )
}

export default PostList;