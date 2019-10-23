import React from 'react';
import './App.css';
// import './search';
// import './searchbutton';
// import './api';
// import TestRender from 'react-test-renderer'
// import ReactTestUtils from 'react-dom/test-utils'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//import sinon from 'sinon;'

const App = () => {
  
  return (
    <div className = "App">
      <h1>Seer</h1>
      <h2>Trending</h2>
      <h3>About Us</h3>
      <h4>Account</h4>
      <form className="App">
      <TextField
        id="outlined-full-width"
        style={{ margin: 0, width: 1000 }}
        placeholder="Find Places"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        
      />
        <Button variant="contained" color="white">
        Search
        </Button>
      </form>

    </div>

  );
};


export default App;