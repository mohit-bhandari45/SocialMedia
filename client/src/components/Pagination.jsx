import React from 'react'
import StyledUl from './styles'
import { Link } from 'react-router-dom';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

const Pagination = () => {
  return (
    <MuiPagination classes={{StyledUl}} count={5} page={1} variant="outlined" renderItem={(item)=>(
        <Link to={`/posts?page=${1}`}><PaginationItem {...item}/></Link>
    )}/>
  )
}

export default Pagination
