import { combineReducers } from "redux";

import profileReducer from './profile/reducer'

const rootReducer=combineReducers({
    profile:profileReducer,
})
export default rootReducer;