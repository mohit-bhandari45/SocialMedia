import { styled } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const styles = {
  appBar: styled('div')(({ theme }) => ({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  })),
  heading: styled('h2')(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  })),
  image: styled('img')({
    marginLeft: '10px',
    marginTop: '5px',
  }),
  toolbar: styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  })),
  profile: styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  })),
  logout: styled('button')({
    marginLeft: '20px',
  }),
  userName: styled('div')({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  }),
  brandContainer: styled('div')({
    display: 'flex',
    alignItems: 'center',
  }),
  purple: styled('div')(({ theme }) => ({
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  })),
};

export default styles;
