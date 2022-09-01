import React, { useState} from "react";
import CommentListItem from './commentListItem';
import './style.css';
import {commentsList} from './constants';
import {Sort} from './icons';
import icon from './Videos/logo192.png'

const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const [commentli, setCommentli] = useState(commentsList);

    const addComment = async ()=> {
        const newContent = newComment;
        if (newContent !== ''){
            let tempList = [...commentli];
            tempList.unshift({
                userName: 'new user',
                time:'just now',
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
        {/* Display other users comments */}
        <ul className="list-group">
            <Sort/>
            {/* Add new comments */}
            <div className="d-flex flex-row ps-1 me-1">
                <div className=" align-self-start ps-1 me-0"
                id='commentIcon'>
                    <img
                        alt={`avatar`}
                        src={icon}
                        width="48px"
                        className="rounded-circle float-start"
                    />
                </div>
                <div className="flex-fill ps-2">
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
        
                <div className="float-end d-flex justify-content-end mb-1">
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
            {commentli.map((commentItem, key) => {
                return <CommentListItem key={key} comment={commentItem} index={key} total={commentli.length}/>;
            })}
        </ul>
        </>
    )

};
export default Comments;