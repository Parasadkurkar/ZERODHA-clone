import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1 className="fs-2">Charges</h1>
        <h3 className="text-muted mt-2 fs-5" style={{color:"rgb(155, 155, 155)"}}>List of all charges and taxes</h3>
      </div>

      <div className="row p-5 mt-5">
        <div className="col-4 text-center p-5">
          <img src="media/images/pricingEquity.svg" alt="" style={{width:"90%"}}/>
          <h2 className="fs-4 mb-3">Free Equity Delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center p-5">
            <img src="media/images/intradayTrades.svg" alt=""  style={{width:"90%"}}/>
          <h2 className="fs-4 mb-3">Free Equity Delivery</h2>
          <p className="text-muted">
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center p-5">
            <img src="media/images/pricingEquity.svg" alt="" style={{width:"90%"}} />
          <h2 className="fs-4 mb-3">Free Equity Delivery</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
