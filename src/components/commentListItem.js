import React from "react";
import icon from './Videos/logo192.png'


const CommentListItem = ({ comment }) => {
    const {userName, comments} = comment;

  return (
    <li className="list-group-item ">
      <div className="row ms-0 me-1 text-nowrap ">
        <div className="col-1 d-flex align-self-start ps-0 pe-0">
          <img
            alt={`${userName}-avatar`}
            src={icon}
            width="48px"
            className="rounded-circle float-start"
          />
        </div>

        <div className="col-11 ps-1">
          <div className="fw-bold mb-0">
            {userName} 
          </div>
          <div className="fs-6">{comments}</div>

        </div>

        
      </div>
    </li>
  );
};

export default CommentListItem;