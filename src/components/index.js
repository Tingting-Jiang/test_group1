import React from "react";
import test_video from './Videos/test_video.mp4';



const HomePage = () => {
    return (
      <>
       This is the home page v5-6
       <h2>Embedding YouTube</h2>
        <iframe width="560"
            height="315" 
            src="https://www.youtube.com/embed/7CZTLogln34"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>

        <video width="560" height="315"  controls>
            <source src={test_video} type='video/mp4'/> 
            
        </video>
        <div className="row text center">
            <div class="col">
                <i class="fa-regular fa-heart">99</i>
            </div>
            <div class="col">
            <i class="fa-regular fa-thumbs-down">100</i>
            </div>
        </div>
      </>
    );
    
  };
  
  export default HomePage;