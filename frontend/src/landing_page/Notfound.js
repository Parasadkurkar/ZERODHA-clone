import React from 'react'
import { Link } from 'react-router-dom';
function Notfound() {
    return ( 
        <div className="container mt-5 text-center">
            <h1>404 Not Found!</h1>
            <p>The Page you are Looking for is Not available<Link class="nav-link active" aria-current="page" to="/">
                <b>Go To Homepage</b>
                              </Link>
            </p>
        </div>
     );
}

export default Notfound;