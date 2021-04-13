import { USER_LOGIN, USER_SIGNUP, USER_FORGOT_PASSWORD, LIST_USERS, ASSIGN_USER_TYPE} from "../actions/types";
const initialState = {
    user: '',
}
export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_SIGNUP:
            return {
                ...state,
                user: action.payload
            }
        case LIST_USERS:
            return {
                ...state,
                user:action.payload
            }
        case ASSIGN_USER_TYPE:
        return {
            ...state,
            user:action.payload
        }
        default:
            return state;
    }
}
