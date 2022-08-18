import React, { useState } from "react";
import test_video from './Videos/test_video.mp4';
import Recommandation from "./recommendation";
import Introduction from "./introduction";
import Comments from './comments'
import { lightLike, solidLike, lightDislike, solidDislike, ShareIcon, Download, Clip, Save} from "./icons";

const HomePage = () => {
    const authorItem = {
        name: "Author name",
        handle: "California",
        description: "The short description about the author of the vedio and the contents of this video"
    };
    const like= 199;
    const [likeNum, setLikeNum] = useState(like);
    const [clickDislike, setClickDislike] = useState(false);

    const editLike = () => {
        console.log("clicked like once")
        if (likeNum === like)
            setLikeNum(likeNum+1);
        else setLikeNum(like);
    }

    const editDislike = ()=>{
        console.log("clicked dislike once")
        setClickDislike(!clickDislike);
    }

    return (
       <>
        This is the home page v6-1
        <h2>Embedding YouTube</h2>
    
        <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                {/* video player */}
                <video width="100%" height="auto"  controls>
                    <source src={test_video} type='video/mp4'/>   
                </video>

                {/*  like and dislike */}
                <div className="d-flex justify-content-end mb-4 mt-2 ">
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
                        onClick={editLike}
                    />
                    </g>
                </svg>
                <span className="ps-1 pe-3 fw-normal lh-sm"> {likeNum}</span>

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
                    onClick={editDislike}
                    >
                    <g className="style-scope yt-icon">
                    <path
                        d={clickDislike? solidDislike: lightDislike}
                        className="style-scope yt-icon"
                    />
                    </g>
                </svg>

                   <span className="ps-1 fw-normal lh-sm pe-3"> DISLIKE</span>
                   <ShareIcon/>
                   <span className="ps-1 fw-normal lh-sm pe-3 "> SHARE</span>
                   <Download/>
                   <span className="ps-1 fw-normal lh-sm pe-3 "> DOWNLOAD</span>
                   <Clip/>
                   <span className="ps-1 fw-normal lh-sm pe-3 "> CLIP</span>
                   <Save/>
                   <span className="ps-1 fw-normal lh-sm pe-3 "> SAVE</span>
                </div>

                {/*  Info of author */}
                <Introduction authorItem={authorItem}/>
                <hr></hr>

                {/*  About the comment */}
                <p class='fs-5'>Comments are turned off.</p>
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
