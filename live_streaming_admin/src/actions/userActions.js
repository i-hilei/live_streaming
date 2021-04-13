import { USER_LOGIN, USER_SIGNUP, USER_FORGOT_PASSWORD, LIST_USERS, ASSIGN_USER_TYPE } from './types';
import {postData, postDataAndImage, getData} from './fetchActions';
import {toast} from "react-toastify";
toast.configure()
export const userLogin = loginData => async dispatch => {
    try {
        const user = await postData("/v1/logIn", loginData, "POST");
        await dispatch({ type: USER_LOGIN, payload: user })
    } catch (error) {
        console.log(error);
        toast.dismiss()
        toast.warn('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}
export const getAllUsers = () => async dispatch => {
    try {
        const user = await getData("/v1/getAllUsers");
        await dispatch({ type: LIST_USERS, payload: user })
    } catch (error) {
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}

export const assignUserType = data => async dispatch => {
    try {
        const user = await postData('/v1/assignUserType', data, "PATCH");
        await dispatch({ type: ASSIGN_USER_TYPE, payload: user })
    } catch (error) {
        console.log(error);
        toast.dismiss()
        toast.warn('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}