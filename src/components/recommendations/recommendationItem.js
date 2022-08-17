import React from "react";


const RecommendationItem = ((item) => {
    return (
        <li className="list-group-item " >
            <video width="370" height="260"  controls>
                <source src={item} type='video/mp4'/>   
            </video>
        </li>
               
    )
});

export default RecommendationItem;