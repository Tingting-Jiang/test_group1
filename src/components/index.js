import React from "react";

const HomePage = () => {
    return (
      <>
       This is the home page v5-4
       <h2>Embedding YouTube</h2>
        <iframe width="560"
            height="315" 
            src="https://www.youtube.com/embed/7CZTLogln34"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>

        <video width="320" height="240" controls autoPlay>
            <source src="./../vendors/test_video.mp4" type='video/mp4'/>
         
        </video>
        <div className="row text center">
            <div class="col">
                <h3>placeholder</h3>
            </div>
            <div class="col">
            <i class="fa-solid fa-thumbs-up"> 77</i>
            <i class="fa-thin fa-heart"></i>
            {/* <FontAwesomeIcon icon="fa-thin fa-heart" /> */}
            </div>
            <div class="col">
            <i class="fa-solid fa-thumbs-down">dislike</i> 
            </div>
        </div>
      </>
    );
  };
  
  export default HomePage;