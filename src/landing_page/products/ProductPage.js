import React from 'react'
import Hero from './Hero';
import Leftsection from "./Leftsection"
function ProductPage() {
    return (  
        <>
        <Hero />
        <Leftsection 
        imgurl ="media/images/kite.png"
        product ="Kite"
        prodDescr="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnmore =""
        googleplay =""
        appstore =""
        />

        </>
    );
}

export default ProductPage;