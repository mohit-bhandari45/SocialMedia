import { styled } from '@mui/material/styles';

const styles = {
  media: styled('div')({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  }),
  border: styled('div')({
    border: 'solid',
  }),
  fullHeightCard: styled('div')({
    height: '100%',
  }), 
  card: styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  }),
  overlay: styled('div')({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  }),
  overlay2: styled('div')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  }),
  grid: styled('div')({
    display: 'flex',
  }),
  details: styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  }),
  title: styled('h2')({
    padding: '0 16px',
  }),
  cardActions: styled('div')({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  }),
};

export default styles;
