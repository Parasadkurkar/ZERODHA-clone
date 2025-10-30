import React from 'react'
function Footer() {
    return (  
        <div className="container border-top mt-5" >
            <div className="row mx-5 p-2  ">
                <div className="col mt-4">
                    <img src="media/images/logo.svg" className='mb-3 ' alt="logo" style={{width:"50%"}} />
                    <p className=''>© 2010 - 2025, Zerodha <br/> Broking Ltd.<br/>
                     All rights reserved.</p>
                </div>
                <div className="col mt-3 ">
                    <h3 className='fs-4'>Account</h3>
                    <a href="" className="syz text-muted">Open demat account</a><br/>
                    <a href="" className="syz text-muted">Minor demat account</a><br/>
                    <a href="" className="syz text-muted">NRI demat account</a><br/>
                    <a href="" className="syz text-muted">Commodity</a><br/>
                    <a href="" className="syz text-muted">Dematerialisation</a><br/>
                    <a href="" className="syz text-muted">Fund transfer</a><br/>
                    <a href="" className="syz text-muted">MTF</a><br/>
                    <a href="" className="syz text-muted">Referral program</a><br/>
                </div>
                <div className="col mt-3">
                    <h3 className='fs-4'>Support</h3>
                    <a href="" className="syz text-muted">Contact us</a><br/>
                    <a href="" className="syz text-muted">Support portal</a><br/>
                    <a href="" className="syz text-muted">How to file a complaint?</a><br/>
                    <a href="" className="syz text-muted">Status of your complaints</a><br/>
                    <a href="" className="syz text-muted">Bulletin</a><br/>
                    <a href="" className="syz text-muted">Circular</a><br/>
                    <a href="" className="syz text-muted">Z-Connect blog</a><br/>
                    <a href="" className="syz text-muted">Downloads</a><br/>
                </div>
                <div className="col mt-3">
                    <h3 className='fs-4'>Company</h3>
                    <a href="" className="syz text-muted">About</a><br/>
                    <a href="" className="syz text-muted">Philosophy</a><br/>
                    <a href="" className="syz text-muted">Press & media</a><br/>
                    <a href="" className="syz text-muted">Careers</a><br/>
                    <a href="" className="syz text-muted">Zerodha Cares (CSR)</a><br/>
                    <a href="" className="syz text-muted">Zerodha.tech</a><br/>
                    <a href="" className="syz text-muted">Open source</a><br/>
                </div>

            </div>
            <div> 
            <p className='mt-5 text-small text-muted '>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF. 
            <br/><br/>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
            <br/><br/>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
            <br/>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            <br/><br/>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            </div>
        </div>
    );
}

export default Footer;