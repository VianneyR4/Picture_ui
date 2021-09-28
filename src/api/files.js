'use strict';
import axios from "axios";
// import qs from "qs";
// import store from "../store"

// const API_URL = "http://127.0.0.1:3000/api/v1";
const API_URL = "https://picture-api-app.herokuapp.com/api/v1";


/**
 * a function that allow the admin to be connected
 * @param {*} token
 * @param {*} title
 * @param {*} description
 * @param {*} file
 */

 export function uploadImage(token, title, description, file) {

    let data = new FormData()

    const configPostEndPoint = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': "*",
            Authorization: "Bearer "+ token,
        },
        mode: "no-cors"
    };
    const url = API_URL + `/images/upload`;

    data.append('title', title);
    data.append('description', description);
    data.append('image', file);

    return axios
        .post(
            url,
            data,
            configPostEndPoint
        )
        .then(result => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "message": result.data.error == undefined ? result.data.message : result.data.error,
                "uploaded_data": result.data.error == undefined ? result.data.userId : null
            }
            
            return response;
        })
        .catch(err => {
            let response = {"message": err};
            console.log(response);
            return response;
        })

}

/**
 * a function that allow the admin to be connected
 * @param {*} token
 * @param {*} filter
 */

 export function getAllImage(token, filter) {

    const url = API_URL + `/images/${filter}`;

    return axios
        .get(url,{
            headers: {
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': "*",
                Authorization: "Bearer "+ token,
            },
            mode: "no-cors"
        })
        .then(result => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "message": result.data.error == undefined ? result.data.message : result.data.error,
                "data": result.data.error == undefined ? result.data.imageData : null,
                "filter": result.data.error == undefined ? result.data.filter : null
            }

            return response;
        })
        .catch(err => {
            console.log('ERROR: ', err);
            let response = {'ERROR': err};
            return response;
        })

}


/**
 * a function that allow the admin to be connected
 * @param {*} token
 * @param {*} filter
 */

 export function getImageByUser(token, filter) {

    const url = API_URL + `/images/byUser/${filter}`;

    return axios
        .get(url,{
            headers: {
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': "*",
                Authorization: "Bearer "+ token,
            },
            mode: "no-cors"
        })
        .then(result => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "message": result.data.error == undefined ? result.data.message : result.data.error,
                "data": result.data.error == undefined ? result.data.imageData : null,
                "filter": result.data.error == undefined ? result.data.filter : null
            }

            return response;
        })
        .catch(err => {
            console.log('ERROR: ', err);
            let response = {'ERROR': err};
            return response;
        })

}