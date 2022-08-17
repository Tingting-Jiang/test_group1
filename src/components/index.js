import React, { useState } from "react";
import test_video from './Videos/test_video.mp4';
import icon from './Videos/logo192.png';
import Recommandation from "./recommendations/index";

const HomePage = () => {
    const like= 199;
    const dislike = 99;
    const [likeNum, setLikeNum] = useState(like);
    const [dislikeNum, setDislikeNum] = useState(dislike);
    const [clickLike, setClickLike] = useState(false);
    const [clickDislike, setClickDislike] = useState(false);

    const editLike = () =>{
        if (!clickLike){
            setLikeNum(likeNum+1);
            setClickLike(true)
        }
        else {
            setLikeNum(like);
            setClickLike(false);
        }
    }

    const editDislike = ()=>{
        if (!clickDislike){
            setDislikeNum(dislikeNum+1);
            setClickDislike(true);
        }
        else {
            setDislikeNum(dislike);
            setClickDislike(false);
        }
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
                <div className="d-flex justify-content-end mb-4 mt-2">
                    <i class="fa-regular fa-heart pe-2" 
                     style={{ color: clickLike ? "red" : "black" }}
                    onClick={editLike}> {likeNum} &nbsp;</i> 

                    <i class="fa-regular fa-thumbs-down pe-2 ps-2"
                     style={{ color: clickDislike ? "blue" : "black" }}
                     onClick={editDislike}> {dislikeNum} &nbsp; </i> 
                </div>
                {/*  Info of author */}
                <div className="row ms-0 me-1 text-nowrap ">
                    <div className="col-1 d-flex align-self-center ps-0 pe-0 img-bg">
                    <img
                         src={icon}
                         alt=''
                         width="48px"
                         className="rounded-circle float-start"
                    />
                    </div>

                    <div className="col-9 ps-0">
                    <div className="fw-bold mb-0">
                        Author name
                    </div>

                    <div className="d-flex">@CA</div>
                    </div>

                    <div className="col-2 ps-0 align-self-center d-grid">
                    <button className="btn rounded-pill btn-primary ">Follow</button>
                    </div>
                </div>
                <p class="fs-6">The ASICS Gel Kayano 29 returns and continues on its legacy as a cushioned stability shoe with an even softer underfoot expierence. Featuring a new Blast+ midsole and adaptive LITE TRUSS system, the Kayano 29 offers a substantial upgrade that fans of the series will continue to bring out for a wide variety of daily training.</p>
                <hr></hr>
                {/*  About the comment */}
                <p class='fs-5'>The Comments are closed</p>

            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <Recommandation/>   
            </div>
        </div>
     
        {/* <div className="col-8 d-none d-md-none">
            <Recommandation/>   
        </div> */}
  

    
      </>
    );
    
  };
  
  export default HomePage;


//   <iframe width="560"
//   height="315" 
//   src="https://www.youtube.com/embed/7CZTLogln34"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen>
// </iframe>