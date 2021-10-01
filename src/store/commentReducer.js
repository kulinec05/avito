const defaultState = {
    data: {}
}

const ADD_COMMENT = "ADD_COMMENT"

export const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state, data: {...state.data, ...action.payload}}
        default:
            return state
    }
}

export const addCommentAction = (payload) => ({type: ADD_COMMENT, payload})