import React from "react";

const HomePage = () => {
    return (
      <>
       This is the home page v4

        <video>
            <source type="video/mp4" src="../vendors/test_video.mp4" />
        </video>
        <div className="row text center">
            <div class="col">
                <i class="fa-solid fa-user"></i>
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