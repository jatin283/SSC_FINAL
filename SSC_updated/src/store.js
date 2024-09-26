import  {createStore ,combineReducers, applyMiddleware} from "redux";
import { thunk } from 'redux-thunk'; // Correct way to import named export

import updateReducer from "./reducers/updatesReducer";
import spcReducer from "./reducers/spcReducer"
let store =createStore(combineReducers({
    updateReducer:updateReducer,
    spcReducer: spcReducer,
}),applyMiddleware(thunk))

export default store