import { LIST_CLUB_READY_USERS, SHOW_USER_BILLING} from "../actions/types";
const initialState = {
    clubReady: '',
}
export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case LIST_CLUB_READY_USERS:
            return {
                ...state,
                clubReady: action.payload
            }
        case SHOW_USER_BILLING:
            return {
                ...state,
                clubReady: action.payload
            }
        default:
            return state;
    }
}