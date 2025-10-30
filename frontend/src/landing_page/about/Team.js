import React from 'react'
function Team() {
    return ( 
    <div className="conatiner">  
        <div className="row p-5 " style={{lineHeight:"1.8",fontSize:"1.2em"}}>
        <h1 className="text-center fs-3 mb-3 text-muted">People</h1>
        <div className="col-6 p-5 text-center text-muted" style={{marginleft:""}}>
          <img src="media/images/nithinKamath.jpg" alt="" style={{width:"50%",borderRadius:"100%"}} />
          <h4 className="mt-5"> Nithin kamath</h4>
          <h6 className="">Founder, CEO</h6>
        </div>

        <div className="col-6 p-5" style={{marginleft:"30px"}} >
          <p className="">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on Homepage TradingQnA Twitter
          </p>
        </div>
      </div>
    </div>  
     );
}

export default Team;