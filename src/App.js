import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


function submit() {
  const username = 'ramesh';
  const password = 'ramesh';
  const credentials = `${username}:${password}`;
  const base64Credentials = btoa(credentials);
  const apiUrl = 'http://localhost:8080/usr';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${base64Credentials}`,
    }
  }

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (response.ok) {
        console.log(response.text());
      }
    })
}

function App() {

  const textFieldStyle = {
    width: '20rem'
  };

  const useStyles = makeStyles((theme) => ({
    topMargin: {
      marginTop: '200px', // Adjust the margin as needed
    },
  }));

  const buttonStyle = {
    width: '20rem'
  }

  const marginTop = {
    margin: '50 rem'
  }

  return (
    <div className="App">

      <h1 style={marginTop}>ChatApp</h1>

      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder='Username'
        style={textFieldStyle}

      />
      <br></br>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        style={textFieldStyle}
      />
      <br></br>
      <br></br>
      <Button variant="contained" style={buttonStyle} onClick={submit}>Login</Button>
    </div>
  );
}

export default App;
