import React from "react";
function Leftsection({
  imgurl,
  product,
  prodDescr,
  tryDemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-7 p-5">
            <img src={imgurl}  style={{width:"70%",marginLeft:"70px"}} alt="" />
        </div>
        <div className="col-5 mt-5 p-5 text-muted
        ">
            <h1 className="mb-3">{product}</h1>
            <p style={{lineHeight:"1.5" ,fontSize:"1.2em"}}>{prodDescr}</p>

            <div className="mb-4 fs-5 text-muted " >
            <a href={tryDemo} style={{textDecoration:"none"}}>Try demo  ➡
 </a>
            <a href={learnmore}  style={{marginLeft:"80px",textDecoration:"none"}}>Learn More  ➡
</a>
            </div>

            <div>
            <a href={googleplay}>
                <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appstore} style={{marginLeft:"60px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
