import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className="" id="supportwrap">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 p-5">
            <h1  className="fs-4">Search for an answer or browse help topic to create ticket</h1>
            <input placeholder="Eg.How do i activate F&O" /><br/>
            <a href="#">Track accont opening</a> <span></span>
            <a href="#">Track segment activation</a> <span> </span>
            <a href="#">Intraday margins </a> <span> </span>
            <a href="#">Kite user manual </a> <span></span>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5">
            <h1 className="fs-3 mb-3">Featured</h1>
            <ul>
            <a href="#">1.Current takoovers and delisting -jan 2024 </a> <br /> <br/>
            <a href="#">2.Latest Intraday Leverages - MIS & CO</a>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
