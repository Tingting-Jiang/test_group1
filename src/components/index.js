import React from "react";

const HomePage = () => {
    return (
      <>
       This is the home page v5
       <h2>Embedding YouTube</h2>
        <iframe width="560"
            height="315" 
        src="https://www.youtube.com/embed/7CZTLogln34"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>


        <video>
            <h1>video here</h1>
            <source type="video/mp4" src="../vendors/test_video.mp4" />
        </video>
        <div className="row text center">
            <div class="col">
            <i class="fa fa-cog fa-2x" style="color: tomato"></i>
            <i class="fa fa-heart fa-2x" style="color: tomato"></i>
            <i class="fa fa-share fa-3x" style="color: #5ec15b"></i><br/>
            <i class="fa fa-comment fa-3x" style="color: #19d49e"></i>
            <i class="fa fa-image fa-3x" style="color: rgb(234,123,12)"></i>
            <i class="fa fa-chart-bar fa-4x" style="color: rgb(123,234,123)"></i>

            </div>
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
        </div>
      </>
    );
  };
  
  export default HomePage;