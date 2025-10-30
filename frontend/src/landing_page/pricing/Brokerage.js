import React from "react";
function Brokerage() {
  return (
    <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
            <div className="col-8 p-4">
            <a href="#"  style={{textDecoration:"none"}}><h1 className="fs-5 ">Brokerage Calculator</h1></a>
            <ul style={{textAlign:"left",lineHeight:"2.5"}} className="text-muted" >
            <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower). </li>               
           <li> For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
            </ul>
            </div>
            
            <div className="col-4  p-4 text-muted">
            <a href="#"  style={{textDecoration:"none"}}><h3 className="fs-5">List Of Charges</h3></a>
            <h5 style={{textAlign:"left"}}>GST</h5>
            <p style={{textAlign:"left",fontSize:"13px"}} >Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
            
            <h5 style={{textAlign:"left"}}>SEBI Charges</h5>
            <p style={{textAlign:"left" ,fontSize:"13px"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

            <h5 style={{textAlign:"left"}}>DP (Depository participant) charges</h5>
            <p style={{textAlign:"left" ,fontSize:"13px"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
            <p style={{textAlign:"left" ,fontSize:"13px"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
            </div>
        </div>
    </div>
  );
}

export default Brokerage;
