import { styled } from '@mui/material/styles';

// Define styled components
const appBar = styled('div')(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));

const heading = styled('h2')({
  color: 'rgba(0, 183, 255, 1)',
});

const image = styled('img')({
  marginLeft: '15px',
});

// Export all styled components as a single object
const styles = {
  appBar,
  heading,
  image,
};

export default styles;
