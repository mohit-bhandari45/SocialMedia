import { styled } from '@mui/material/styles';

const styles = {
  root: styled('div')(({ theme }) => ({
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  })),
  paper: styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
  })),
  form: styled('form')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }),
  fileInput: styled('input')({
    width: '97%',
    margin: '10px 0',
  }),
  buttonSubmit: styled('button')({
    marginBottom: 10,
  }),
};

export default styles;
