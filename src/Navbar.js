import './App.css';
import { Link } from "react-router-dom"
import React from 'react';
function Nava()
{
    return(
        <nav id='nav'>
            <div>
        <h1 id='headnav'>Diary App</h1>
        </div>
        <div>
        
        <Link to = '/' className='link'>Home</Link>
        <Link to = '/Entries' className='link'>Entries</Link>
        </div>
                </nav> 
    )
}
export default Nava;