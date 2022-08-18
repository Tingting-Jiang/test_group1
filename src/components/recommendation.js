import React from "react";
import test_video from './Videos/test_video.mp4';

const Recommendation = ()=> {
    return (
        <ul className="list-group">
            <li className="list-group-item " >
                <video width="100%" height="auto"  controls>
                    <source src={test_video} type='video/mp4'/>   
                </video>
             </li>
             <li className="list-group-item " >
             <video width="100%" height="auto"  controls>
                    <source src={test_video} type='video/mp4'/>   
                </video>
             </li>
             <li className="list-group-item " >
             <video width="100%" height="auto"  controls>
                    <source src={test_video} type='video/mp4'/>   
                </video>
             </li>
         </ul>
    )
}

export default Recommendation;