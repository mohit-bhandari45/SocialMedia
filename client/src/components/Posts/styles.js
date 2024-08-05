import { styled } from '@mui/material/styles';

const styles = {
  mainContainer: styled('div')({
    display: 'flex',
    alignItems: 'center',
  }),
  smMargin: styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
  })),
  actionDiv: styled('div')({
    textAlign: 'center',
  }),
};

export default styles;
