import { styled } from '@mui/material/styles';
import { Avatar, TextField, Button, Paper } from '@mui/material';

export const paperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const textFieldStyled = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const avatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const formStyled = styled('form')(({ theme }) => ({
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(3),
}));

export const submitButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const googleButtonStyled = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

// Export all styles in a single object
const styles = {
  paperStyled,
  textFieldStyled,
  avatarStyled,
  formStyled,
  submitButtonStyled,
  googleButtonStyled,
};

export default styles;
