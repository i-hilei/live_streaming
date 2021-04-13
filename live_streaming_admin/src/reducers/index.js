import { combineReducers } from "redux";
import userReducers from "./userReducers";
import liveScheduleReducers from './liveScheduleReducers';
import clubReadyReducers from "./clubReadyReducers";

export default combineReducers({
    user: userReducers,
    liveSchedule:liveScheduleReducers,
    clubReady:clubReadyReducers,
})