import {addNewsListAction} from "../store/NewsListReducer";

export const NewsFetcher = () => {

    return  function (dispatch){
        fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`)
            .then((res) => res.json())
            .then((data) => {
                data = data.splice(0, 100)
                let valueS = {};
                Promise.all(data.map(value => {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${value}.json`)
                        .then((res) => res.json())
                        .then((data) => {
                            valueS[value] = data
                            dispatch(addNewsListAction(valueS))
                        })
                }))

            })

    }
}