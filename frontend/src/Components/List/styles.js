import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', marginLeft: '20px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  button : {
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'black', 
    borderWidth: '2px', 
    padding: 500,
    marginLeft: '20px', 
    marginTop: '15px',
  },
  answer : {
    marginLeft: 40,
  },
}));