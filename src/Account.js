import React from 'react';
import { Link } from 'react-router-dom'; 
import HomeIcon from '@material-ui/icons/Home';

function Account() {
    return (
        <div className="account">
            <Link to="/">
                <HomeIcon/>
            </Link>
            <h1>Account PAGE</h1>            
        </div>
    )
}

export default Account
