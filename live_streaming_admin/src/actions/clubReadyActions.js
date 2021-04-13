import { LIST_CLUB_READY_USERS, SHOW_USER_BILLING} from './types';
import {ClubReadyAPI} from './fetchActions';
import {toast} from "react-toastify";
toast.configure()

export const getUsersList = (data) => async dispatch => {
    try {
        const clubReady = await ClubReadyAPI(`club/${data.StoreId}/Users/all?ApiKey=${process.env.REACT_APP_CLUB_READY_API_KEY}`);
        await dispatch({ type: LIST_CLUB_READY_USERS, payload: clubReady })
    } catch (error) {
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}

export const getUserBilling = (data) => async dispatch => {
    try {
        const clubReady = await ClubReadyAPI(`sales/members/${data.MemberId}/status?ApiKey=${process.env.REACT_APP_CLUB_READY_API_KEY}&StoreId=${data.StoreId}`);
        await dispatch({ type: SHOW_USER_BILLING, payload: clubReady })
    } catch (error) {
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}

export const userCheckIn = (data) => async dispatch => {
    try {
        const clubReady = await ClubReadyAPI(`users/checkin/?ApiKey=${process.env.REACT_APP_CLUB_READY_API_KEY}&StoreId=${data.StoreId}&UserId=${data.UserId}`);
        await dispatch({ type: LIST_CLUB_READY_USERS, payload: clubReady })
    } catch (error) {
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
} 

