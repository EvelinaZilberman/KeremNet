import React from "react";
import CommentProps from "./CommentStructure";

interface PostProps{
    author: string
    date: string
    content: string
    likes: number
    comments: CommentProps[]
}

export default PostProps;