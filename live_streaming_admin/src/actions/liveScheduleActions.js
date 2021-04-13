import {CREATE_LIVE_SCHEDULE, LIVE_SCHEDULE, LIVE_SCHEDULE_DELETE} from './types';
import {postData, getData, deleteData} from './fetchActions';
import {toast} from "react-toastify";
toast.configure()
export const createLiveSchedule = data => async dispatch => {
    try {
        const liveSchedule = await postData("/v1/createLiveSchedule", data, "POST");
        await dispatch({ type: CREATE_LIVE_SCHEDULE, payload: liveSchedule })
    } catch (error) {
        console.log(error);
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}
export const getAllLiveSchedule = () => async dispatch => {
    try {
        const liveSchedule = await getData("/v1/getAllLiveSchedule");
        await dispatch({ type: LIVE_SCHEDULE, payload: liveSchedule })
    } catch (error) {
        console.log(error);
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}
export const deleteLiveSchedule = (id) => async dispatch => {
    try {
        const liveSchedule = await deleteData(`/v1/deleteLiveSchedule/${id}`);
        await dispatch({ type: LIVE_SCHEDULE_DELETE, payload: liveSchedule })
    } catch (error) {
        console.log(error);
        toast.dismiss()
        toast.error('Something Went Wrong', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
    }
}
