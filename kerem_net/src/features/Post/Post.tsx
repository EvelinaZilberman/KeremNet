import React from "react";

import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ExpandMore from "../ExpendMore";
import Comment from "../Comment/Comment";

interface CommentProps{
    author: string
    content: string
    likes: number
}

interface PostProps{
    author: string
    date: string
    content: string
    likes: number
    comments: CommentProps[]
}

const Post: React.FC<PostProps> = ({author, date, content, likes, comments}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card sx={{ maxWidth: 345, backgroundColor: 'lightblue' }}>
            <CardHeader
                title={author}
                subheader={date}/>
            <CardContent>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon /> {likes}
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Comments:</Typography>
                    {comments.map((comment) => 
                        <Typography sx={{ marginBottom: 2 }}>
                            <Comment author={comment.author} content={comment.content} likes={comment.likes}/>
                        </Typography>
                    )}
        </CardContent>
      </Collapse>
        </Card>

    )
}

export default Post;