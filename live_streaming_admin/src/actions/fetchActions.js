let token = JSON.parse(localStorage.getItem('hardcoreLiveToken'))
console.log(token)
const axios = require("axios");
// var BaseURL = 'https://157.245.102.178:5001'
var BaseURL = 'https://hardcorefitnesslive.com:5001/api/admin';
export const Red5proVideosServerPath = 'https://hardcorefitnesslive.com:5443/live/streams';

const ClubReadyAPI = async url => {
    try {
        const response = await fetch(`${process.env.REACT_APP_CLUB_READY_BASE_URL}/${url}`);
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong!');
    }
}


const getData = async url => {
    try {
        const response = await fetch(`${BaseURL}/${url}`, 
        { headers: { 'Authorization': token } }
        );
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong!');
    }
}
const postData = async (url, body, type) => {
    console.log(body)
    try {
        const response = await fetch(`${BaseURL}/${url}`, {
            method: type,
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Authorization': token
            },
            body: JSON.stringify(body)
            // body:body
        });
        const result = await response.json();
        console.log(result)
        return result;
    } catch (e) {
        console.log(e);

        throw new Error('Somthing Went Wrong!');
    }
}
const postDataAndImage = async (url, formData) => {
    try {
        const config = {
            mode: "cors",
            headers: {
                "Content-Type": "multipart/form-data; charset=utf-8;",
                'Authorization': token
            }
        }
        const response = await axios.patch(`${BaseURL}/${url}`, formData, config)
        const result = await response.data;
        return result;
    } catch (e) {
        console.log(url, e)
        throw new Error('Something Went Wrong!');
    }
}
const deleteData = async (url) => {
    try {
        const config = {
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Authorization': token
            },
        }
        const response = await axios.delete(`${BaseURL}/${url}`, config)
        const result = await response.data;
        return result;
    } catch (e) {
        console.log(url, e)
        throw new Error('Something Went Wrong!');
    }
}
export { getData, postData, postDataAndImage, deleteData, ClubReadyAPI};