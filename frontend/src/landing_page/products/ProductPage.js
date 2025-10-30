import React from 'react'
import Hero from './Hero';
import LeftSection from "./Leftsection"
import Rightsection from './Rightsection';
import Universe from './Universe';
function ProductPage() {
    return (  
        <>
        <Hero />
        <LeftSection 
        imgurl ="media/images/kite.png"
        product ="Kite"
        prodDescr="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnmore =""
        googleplay =""
        appstore =""
        />

        <Rightsection
        imgurl="media/images/console.png"
        product="Console"
        prodDescr="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore="Learn More"
        />

        <LeftSection 
        imgurl ="media/images/varsity.png"
        product ="Varsity Mobile"
        prodDescr="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnmore =""
        googleplay =""
        appstore =""
        />

        <Rightsection
        imgurl="media/images/kiteconnect.png"
        product="Kite Connect API"
        prodDescr="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore="Kite Connect"
        />
        <Universe/>

        </>
    );
}

export default ProductPage;