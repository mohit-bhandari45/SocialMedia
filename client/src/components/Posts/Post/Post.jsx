import React from 'react'
import styles from "./styles"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import moment from "moment"
import { useDispatch } from "react-redux"
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
            <div className={styles.overlay}>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styles.overlay2} >
                {(user?.result.googleId === post?.creator || user?.result?._id === post?.creator) && <Button style={{ color: 'white' }} size='small' onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize='default' />
                </Button>}
            </div>
            <div className={styles.details}>
                <Typography variant='body2' color='textSecondary'>
                    {post.tags.map((tag) => {
                        return (`#${tag} `)
                    })}
                </Typography>
            </div>
            <Typography className={styles.title} variant='h5' gutterBottom>
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color='textSecondary' component="p" >
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size='small' color='primary' disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <Likes />
                </Button>
                {(user?.result.googleId === post?.creator || user?.result?._id === post?.creator) && <Button size='small' color='primary' onClick={() => { dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>}
            </CardActions>
        </Card>
    )
}

export default Post
