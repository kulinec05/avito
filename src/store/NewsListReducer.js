const defaultState = {
    data: {}
}

const ADD_NEWS_LIST = "ADD_NEWS_LIST"

export const NewsListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS_LIST:
            return {...state, data: {...state.data, ...action.payload}}
        default:
            return state
    }
}

export const addNewsListAction = (payload) => ({type: ADD_NEWS_LIST, payload})