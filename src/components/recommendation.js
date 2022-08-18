import React from "react";
import recommend1 from './Videos/recommend1.mp4';
import recommend2 from './Videos/recommend2.mp4';
import recommend3 from './Videos/recommend3.mp4';
import recommend4 from './Videos/recommend4.mp4';
import './style.css';

const Recommendation = ()=> {
    return (
        <>
           
            <ul className="list-group">
            <div className="fs-5 fw-bold">
                Recommended For You
            </div>
                <li className="list-group-item " >
                    <video width="100%" height="auto"  controls>
                        <source src={recommend1} type='video/mp4'/>   
                    </video>
                    <div className="iconFont">Dangers of Vaping Nicotine = Irritability</div>
                </li>
                <li className="list-group-item " >
                    <video width="100%" height="auto"  controls>
                        <source src={recommend4} type='video/mp4'/>   
                    </video>
                    <div className="iconFont">Dangers of Vaping _ Nicotine = Brain Poison (extended version)</div>
                </li>
                
                <li className="list-group-item " >
                    <video width="100%" height="auto"  controls>
                        <source src={recommend3} type='video/mp4'/>   
                    </video>
                    <div className="iconFont">Possessed By Nicotine The Real Cost of Vapes</div>
                </li>
                <li className="list-group-item " >
                    <video width="100%" height="auto"  controls>
                        <source src={recommend2} type='video/mp4'/>   
                    </video>
                    <div className="iconFont">The Facts About Vapes Are Scary Enough _ The Real Cost</div>
                </li>
                
            </ul>
         </>
    )
}

export default Recommendation;