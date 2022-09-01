import React from "react";
import main_video from './Videos/main_video.mp4';
import Introduction from "./introduction";
import Comments from './newComments'
import "./style.css"
import main_pic from './Videos/main_pic.png';
import FontLink from "./fontLink";
import CommentsTurnedOff from "./commentsTurnedOff";

const HomePage = () => {
    const authorItem = {
        name: "The Real Cost",
        subscribe: "66.8K subscribers",
        description: "Vaping can put dangerous chemicals, like diacetyl, into your lungs. Learn more about the real cost of vapes: ",
        html:"https://therealcost.betobaccofree.hhs.gov/"
    };

    return (
       <>
        {/* This is the home page v6-1
        <h2>Embedding YouTube</h2> */}
    
            <div className="fs-5 fw-bold pb-2 bg-light">
                <FontLink/>
            </div>
                {/* video player */} 
                <video width="100%" height="auto"  controls poster={main_pic}>
                    <source src={main_video} type='video/mp4'/>   
                </video>
                <div className="description"> The Real Cost - Cautions Against The Use of e-Cigarettes</div>
                <div className="viewDes">11,292 views&#183;Sep 23, 2018 </div>
    
                {/*  Info of author */}
                <Introduction authorItem={authorItem}/>
                <hr></hr>

                {/*  About the comment */}
               <CommentsTurnedOff/>
                <Comments/>
      </>
    );
  };
  
  export default HomePage;


  