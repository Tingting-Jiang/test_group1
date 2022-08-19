import React from "react";
import icon from './Videos/logo.png';
import "./style.css";

const Introduction =({
    authorItem = {
      name: "The Real Cost",
      subscribe: "66.8K subscribers",
      description: "Vaping can put dangerous chemicals, like diacetyl, into your lungs. Learn more about the real cost of vapes: ",
      html:"https://therealcost.betobaccofree.hhs.gov/"
    },
  }) => {
    return (
        <>
        <hr></hr>
        <div className="row ps-1 me-1 ">
            <div className="col-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-flex align-self-start ps-0 pe-0">
                <img
                    src={icon}
                    alt=''
                    width="48px"
                    className="rounded-circle float-start"
                />
            </div>

            <div className="col-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 ps-1 intro">
                <div className="fw-bold mb-0 introduction  ">
                    {authorItem.name}
                </div> 
                <div className="subscribeNum pt-0">{authorItem.subscribe}</div>
                <div class="introduction pt-1" >
                    {authorItem.description}
                    <a className="link-primary" href={authorItem.html}>
                        {authorItem.html}
                    </a>
              </div>
            </div>

            <div className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ps-0 align-self-start d-grid d-flex justify-content-end  me-0 pe-0"
                id='btnSubscribe'>
            <button className="btn btn-sm btnSubscribe">SUBSCRIBE</button>
            </div>
            
        </div>
        
       
        </>
    )
};

export default Introduction;
