import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from './client/App';

let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>, 
    document.getElementById('root') );
