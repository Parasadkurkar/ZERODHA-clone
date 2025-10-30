import React from 'react'
function Hero() {
    return ( 
        <div className="container">
            <div className="row mt-5 p-5 text-center" style={{borderBottom:"10px"}}>
                <h1 className='mt-5 fs-2'>Zerodha Products</h1>
                <p className='fs-4'>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-1'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a> </p>
            </div>
        </div>
     );
}

export default Hero;