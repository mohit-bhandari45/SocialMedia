import React from 'react'
import Post from './Post/Post'
import styles from "./styles"
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@mui/material';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={styles.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => {
                    return <Grid key={post._id} xs={12} sm={6} item>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                })}
            </Grid>
        )
    )
}

export default Posts