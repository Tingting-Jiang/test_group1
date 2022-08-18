import React from "react";
import recommend1 from './Videos/recommend1.mp4';
import recommend2 from './Videos/recommend2.mp4';
import recommend3 from './Videos/recommend3.mp4';
import recommend4 from './Videos/recommend4.mp4';

const Recommendation = ()=> {
    return (
        <ul className="list-group">
            <li className="list-group-item " >
                <video width="100%" height="auto"  controls>
                    <source src={recommend1} type='video/mp4'/>   
                </video>
             </li>
             <li className="list-group-item " >
             <video width="100%" height="auto"  controls>
                    <source src={recommend2} type='video/mp4'/>   
                </video>
             </li>
             <li className="list-group-item " >
             <video width="100%" height="auto"  controls>
                    <source src={recommend3} type='video/mp4'/>   
                </video>
             </li>
             <li className="list-group-item " >
             <video width="100%" height="auto"  controls>
                    <source src={recommend4} type='video/mp4'/>   
                </video>
             </li>
         </ul>
    )
}

export default Recommendation;