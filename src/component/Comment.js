import React, {useEffect, useState} from "react";
import './Comment.css'
import {useDispatch, useSelector} from "react-redux";
import {idCatcher} from "../asyncActions/ids";
import {commentCatcher} from "../asyncActions/comment";

const Comment = (props) => {
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const data = useSelector(state => state.comment.data)
    useEffect(() => {
        dispatch(commentCatcher(props.value))
    }, [])

    return (
        <div className='Comment'>
            <h4>↰ by: {data.by} </h4>
            {data.text}
            {(data.kids || []).length && !show ? <button onClick={() => {
                setShow(true)
            }}>Show more</button> : null}
            <div>       {(data.kids || []).length && show ? Object.values(data.kids).map(value => {
                return <Comment key={value}
                                value={value}/>
            }) : null}</div>
        </div>
    )
}
export default Comment;
/* const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.value}.json`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [])*/