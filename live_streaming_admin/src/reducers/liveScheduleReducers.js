import { CREATE_LIVE_SCHEDULE, LIVE_SCHEDULE, LIVE_SCHEDULE_DELETE} from "../actions/types";
const initialState = {
    liveSchedule: '',
}
export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case CREATE_LIVE_SCHEDULE:
            return {
                ...state,
                liveSchedule: action.payload
            }
        case LIVE_SCHEDULE:
        return {
            ...state,
            liveSchedule: action.payload
        }
        case LIVE_SCHEDULE_DELETE:
        return {
            ...state,
            liveSchedule: action.payload
        }
        default:
            return state;
    }
}
