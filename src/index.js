import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyAyWwE-AzNH_T9WegSN5mTx2iKI3ryy_Co';

const App = () =>{
    return(
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
