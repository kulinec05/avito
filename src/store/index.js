import {createStore , combineReducers , applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {NewsListReducer} from "./NewsListReducer";
import {idCatchReducer} from "./idCatchReducer";
import {commentReducer} from "./commentReducer";

const rootReducer = combineReducers(
    {
        data: NewsListReducer,
        ids: idCatchReducer,
        comment: commentReducer,
    }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

