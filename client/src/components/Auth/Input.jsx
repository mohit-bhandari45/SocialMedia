import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

import Visiblity from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const Input = ({ half, name, handleChange, label, autoFocus, type, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant='outlined'
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === "password" ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visiblity /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
        </Grid>
    )
}

export default Input
