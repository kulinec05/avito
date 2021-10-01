import {addIdInfoAction} from "../store/idCatchReducer";

export const idCatcher = (value) =>{
    return function (dispatch){
        fetch(`https://hacker-news.firebaseio.com/v0/item/${value}.json`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(addIdInfoAction(data))
            })


    }
}