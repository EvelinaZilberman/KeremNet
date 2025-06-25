import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Comment.css'
import CommentProps from '../Common/CommentStructure';

const Comment: React.FC<CommentProps> = ({author, content, likes}) => {
    return(
        <div className="comment">
            <span><strong>{author}</strong>:</span>
            <span>{content}</span>
            <span><FavoriteIcon /> {likes}</span>
        </div>
    )
}

export default Comment;