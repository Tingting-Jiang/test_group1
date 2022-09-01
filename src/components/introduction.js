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
        <div className="d-flex flex-row ps-1 me-1 ">
            <div className=" align-self-start ps-0 pe-0">
                <img
                    src={icon}
                    alt=''
                    width="48px"
                    className="rounded-circle float-start"
                />
            </div>

            <div className="ps-2 intro ">
                <div className="fw-bold mb-0 introduction  ">
                    {authorItem.name}
                </div> 
                <div className="subscribeNum pt-0">{authorItem.subscribe}</div>
                <div className="introduction pt-1 text-wrap" >
                    {authorItem.description}
                    <a className="link-primary " href={authorItem.html}>
                        {authorItem.html}
                    </a>
              </div>
            </div>
            
        </div>
        
       
        </>
    )
};

export default Introduction;
