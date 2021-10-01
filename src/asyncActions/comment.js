import {addCommentAction} from "../store/commentReducer";

export const commentCatcher = (value) =>{
    return function (dispatch){
        fetch(`https://hacker-news.firebaseio.com/v0/item/${value}.json`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(addCommentAction(data))
            })


    }
}