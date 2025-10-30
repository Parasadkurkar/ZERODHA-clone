import React from 'react'
function Award() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li >
                        <p>Features and Options</p></li>
                                <li>
                                    <p>
                                        Commodity derivatives
                                    </p>
                                </li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks and IPO</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Goverments sec</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Award ;