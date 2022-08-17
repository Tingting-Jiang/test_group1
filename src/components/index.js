import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        <video width="320px" height="240px" controls autoPlay>
            <source src="./../vendors/test_video.mp4" type='video/mp4'/>
         
        </video>
        <div className="row text center">
            <div class="col">
              <FontAwesomeIcon icon="fa-regular fa-heart" />99
            </div>
            <div class="col">
             <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />77
            </div>
        </div>
      </>
    );
    
  };
  
  export default HomePage;