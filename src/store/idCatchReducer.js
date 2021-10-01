const defaultState = {
    data: {}
}

const ADD_ID_INFO = "ADD_ID_INFO"

export const idCatchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ID_INFO:
            return {...state, data: {...state.data, ...action.payload}}
        default:
            return state
    }
}

export const addIdInfoAction = (payload) => ({type: ADD_ID_INFO, payload})