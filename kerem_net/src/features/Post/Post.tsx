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

interface Comment{
    comment: string
}

interface PostProps{
    author: string
    date: string
    content: string
    likes: number
    comments: Comment[]
}

const Post: React.FC<PostProps> = (props: PostProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card sx={{ maxWidth: 345, backgroundColor: 'lightblue' }}>
            <CardHeader
                title={props.author}
                subheader={props.date}/>
            <CardContent>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon /> {props.likes}
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
                    {props.comments.map((comment) => 
                        <Typography sx={{ marginBottom: 2 }}>
                            {comment.comment}
                        </Typography>
                    )}
        </CardContent>
      </Collapse>
        </Card>

    )
}

export default Post;