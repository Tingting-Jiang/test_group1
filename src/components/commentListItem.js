import React from "react";
import icon from './Videos/logo192.png';
import user1_pic from './Videos/profile_pic1.png';
import user2_pic from './Videos/profile_pic2.png';
import user3_pic from './Videos/profile_pic3.png';
import user4_pic from './Videos/profile_pic4.png';
import user5_pic from './Videos/profile_pic5.png';
import user6_pic from './Videos/profile_pic6.png';
import { LittleLike, LittleUnlike } from "./icons";

const CommentListItem = ({ comment, index }) => {
    const {userName,
        time,
        comments,
        } = comment;
    const avatarList = [
      user1_pic, user2_pic, user3_pic, user4_pic, user5_pic, user6_pic
    ]

  return (
    <li className="list-group-item bg-light ">
      <div className="row ms-0 me-1 text-nowrap ">
        <div className="col-1 align-self-start ps-0 pe-0 me-2" id='commentIcon'>
          <img
            alt={icon}
            src={avatarList[index]}
            width="48px"
            className="rounded-circle float-start"
          />
        </div>

        <div className="col-10 ps-0 text-wrap ">
          <div className="fw-bold mb-0 commentsWords">
            {userName} 
            <span className="fw-normal subscribeNum">&nbsp; {time }</span>
          </div>
          <div className="commentsWords">{comments}</div>
          <div className="row">
            <div className="col-1 pt-2">
              <LittleLike/>
            </div>
            <div className="col-1 pt-2">
              <LittleUnlike/>
            </div>
            <div className="col-1">
              <span className="fw-normal subscribeNum"> REPLY</span>
            </div>
          
          </div>
          

        </div>

        
      </div>
    </li>
  );
};

export default CommentListItem;