import React, { useState} from "react";
import CommentListItem from './commentListItem';
import icon from './Videos/logo192.png';
import './style.css';

const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const commentsList = [
        { 
            userName: "Foo Bar1",
            comments: "I don't like this"
        },
        {  
            userName: "Foo Bar2",
            comments:"It's a waste of time"
        },
        {
            userName: "Foo Bar3",
            comments: "Terrible video"
        },
        
    ]
    const [commentli, setCommentli] = useState(commentsList);
    const addComment = async ()=> {
        const newContent = newComment;
        if (newContent !== ''){
            let tempList = [...commentli];
            tempList.unshift({
                userName: 'new user',
                comments: newContent
            })
            await setCommentli(tempList);
            await setNewComment('');
        } else return;
    }
    const cancelComment = async () => {
        await setNewComment('');
    }

    return (
        <>
        {/* Add new comments */}
        <div className="row ps-1 me-1">
            <div className=".d-none d-md-block col-md-2 col-lg-1 col-xl-1 col-xxl-1 d-flex align-self-start ps-40 pe-0 text-nowrap"
            id='commentIcon'>
                <img
                    alt={`avatar`}
                    src={icon}
                    width="48px"
                    className="rounded-circle float-start"
                />
            </div>
            <div className="col-12 col-md-10 col-lg-11 col-xl-11 col-xxl-11 ps-1">
                <div className="overflow-scroll form-floating">
                    <textarea
                    placeholder="what's happening?"
                    className="border-1 border-secondary text-secondary form-control mb-2 pe-2"
                    value={newComment}
                    id="floatingTextarea"
                    onChange={(event) => setNewComment(event.target.value)}
                    ></textarea>
                <label for="floatingTextarea " >Add a comment</label>
            </div>
    
            <div className="float-end d-flex justify-content-end mb-4">
                <button
                    onClick={cancelComment}
                    className=" btn btn-sm form-control pe-6 btnCancel"
                    type="button"
                >
                    CANCEL
                </button>

                <button
                    onClick={addComment}
                    className="btn btn-sm form-control btnSubmit"
                    type="button"
                >
                    COMMENT
                </button>
            </div>
        </div>

        </div>

        {/* Display other users comments */}
        <ul className="list-group">
            {commentli.map((commentItem, key) => {
                return <CommentListItem key={key} comment={commentItem} />;
            })}
        </ul>
        </>
    )

};
export default Comments;