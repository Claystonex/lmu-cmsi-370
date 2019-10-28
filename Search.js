import React from 'react';
import './Search.css'
import TextField from '@material-ui/core/TextField';


const Search = () => {
  return (
    <div className = "searched">
      <form className = "search"> {
        <TextField
          id="outlined-full-width"
          style={{ margin: 300 , width: 800, opacity: 4}}
          placeholder="Find Places"
          
          //fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
              />
        }
        </form>
    </div>
    );
};

export default Search;