import React from 'react';
import './SearchButton.css'
import Button from '@material-ui/core/Button';



const SearchButton = () => {
    const ButtonClicked = () => {
        alert("We are going now to the beginning");
    }

    return (
        <div className = "buttonSearched">
            <form className = "buttonSearch">
                <Button onClick = {ButtonClicked}  variant="contained" color="white">
            
                Search
                </Button>

            </form>
        </div>
    );
};


export default SearchButton;