import React from "react";
import icon from './Videos/logo192.png';
import "./style.css"

const Introduction =({
    authorItem = {
      name: "Author name",
      handle: "California",
      description: "placeholder for description"
    },
  }) => {
    return (
        <>
        <hr></hr>
        <div className="row ms-0 me-1 ">
            <div className="col-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-flex align-self-center ps-0 pe-0">
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
                <div className="introduction pt-0">@{authorItem.handle}</div>
                <div class="introduction pt-1" >{authorItem.description}</div>
            </div>

            <div className="col-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ps-0 align-self-center d-grid d-flex justify-content-end  me-0 pe-0"
                id='btnSubscribe'>
            <button className="btn btn-sm btnSubscribe">SUBSCRIBE</button>
            </div>
            
        </div>
        
       
        </>
    )
};

export default Introduction;
