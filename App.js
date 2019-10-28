import React from 'react';
import './App.css';
import Search from './Search';
import Searchbutton from './Searchbutton';
import Header from './Header';
//import './Api';
// import TestRender from 'react-test-renderer'
// import ReactTestUtils from 'react-dom/test-utils'
// import Button from '@material-ui/core/Button';


//import sinon from 'sinon;'

const App = () => {
  
  return (
    <div className = "App">
      
      
        <Search />
        <Searchbutton />
        <Header />

    </div>

  );
};


export default App;