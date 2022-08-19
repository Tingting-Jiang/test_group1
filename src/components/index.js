import React, { useState } from "react";
import main_video from './Videos/main_video.mp4';
import Recommandation from "./recommendation";
import Introduction from "./introduction";
import Comments from './newComments'
import { lightLike, solidLike, lightDislike, solidDislike, ShareIcon, Download, Clip, Save} from "./icons";
import "./style.css"
import main_pic from './Videos/main_pic.png';

const HomePage = () => {
    const authorItem = {
        name: "The Real Cost",
        subscribe: "66.8K subscribers",
        description: "Vaping can put dangerous chemicals, like diacetyl, into your lungs. Learn more about the real cost of vapes: ",
        html:"https://therealcost.betobaccofree.hhs.gov/"
    };
    const like= 199;
    const [likeNum, setLikeNum] = useState(like);
    const [clickDislike, setClickDislike] = useState(false);

    // const editLike = () => {
    //     console.log("clicked like once")
    //     if (likeNum === like)
    //         setLikeNum(likeNum+1);
    //     else setLikeNum(like);
    // }

    // const editDislike = ()=>{
    //     console.log("clicked dislike once")
    //     setClickDislike(!clickDislike);
    // }

    return (
       <>
        {/* This is the home page v6-1
        <h2>Embedding YouTube</h2> */}
    
    
        <div className="row">
       
            <div className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <div className="fs-5 fw-bold pb-2">
                Selected Video
            </div>
                {/* video player */} 
                <video width="100%" height="auto"  controls poster={main_pic}>
                    <source src={main_video} type='video/mp4'/>   
                </video>
                <div className="description"> The Real Cost - Cautions Against The Use of e-Cigarettes</div>
            
                {/*  like and dislike */}
                <div className="d-flex justify-content-between iconLine">
                    <div className="viewDes">11,292 views&#183;Sep 23, 2018 </div>
                    <div className="d-flex justify-content-end mb-4 mt-2" id='icons'>
                        <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            className="style-scope yt-icon"
                            style={{
                                pointerEvents: "none",
                                display: "block",
                                width: "24px",
                                height: "24px",
                            }}
                            >
                            <g className="style-scope yt-icon">
                            <path
                                d={likeNum === like? lightLike: solidLike}
                                className="style-scope yt-icon"
                                // onClick={editLike}
                            />
                            </g>
                        </svg>
                        <span className="ps-1 pe-3 lh-sm iconFont"> {likeNum}</span>
                        <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            className="style-scope yt-icon"
                            style={{
                                pointerEvents: "none",
                                display: "block",
                                width: "24px",
                                height: "24px",
                            }}
                            // onClick={editDislike}
                            >
                            <g className="style-scope yt-icon">
                            <path
                                d={clickDislike? solidDislike: lightDislike}
                                className="style-scope yt-icon"
                            />
                            </g>
                        </svg>
                    <span className="ps-1 lh-sm pe-3 iconFont"> DISLIKE</span>
                    <ShareIcon/>
                    <Download/>
                    <Clip/>
                    <Save/>
                
                    </div>
                </div>

                {/*  Info of author */}
                <Introduction authorItem={authorItem}/>
                <hr></hr>

                {/*  About the comment */}
                <p className='fs-5'>Comments are turned off.</p>
                <Comments/>
                    
                
            </div>
            {/* Recommendation List */}
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <Recommandation/>   
            </div>
        </div>
    
      </>
    );
    
  };
  
  export default HomePage;


  