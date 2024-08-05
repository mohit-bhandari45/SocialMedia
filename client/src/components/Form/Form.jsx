import React, { useEffect, useState } from 'react'
import styles from "./styles"
import { Button, Paper, TextField, Typography } from '@mui/material'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  })
  const user = JSON.parse(localStorage.getItem("profile"))
  const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result.name }))
    } else {
      dispatch(createPost({ ...postData, name: user?.result.name }))
    }
    clear()
  }

  const handleChange = (e) => {
    if (e.target.name === "tags") {
      setPostData({ ...postData, tags: e.target.value.split(',') })
    }
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    })
  }

  if(!user?.result){
    return (
      <Paper className={styles.paper}>
        <Typography alignItems="center" variant='h6'>
          Please Sign in first
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={styles.paper}>
      <form noValidate autoComplete='off' className={`${styles.form} ${styles.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          name='title'
          label="Title"
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          variant='outlined'
          fullWidth
          name='message'
          label="Message"
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          variant='outlined'
          fullWidth
          name='tags'
          label="Tags"
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={styles.fileInput}>
          <FileBase type="file" mutiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={styles.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>
          Submit
        </Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
