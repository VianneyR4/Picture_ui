'use strict';
import axios from "axios";
// import qs from "qs";
// import store from "../store"

const API_URL = "http://127.0.0.1:3000/api/v1";


const configPostEndPoint = {
    headers: {
        'Content-type': "application/json",
        'Access-Control-Allow-Origin': "*"
    },
    mode: "no-cors"
};

/**
 * a function that allow the admin to be connected
 * @param {*} email
 * @param {*} first_name
 * @param {*} last_name
 * @param {*} password
 */

 export function registration(email, first_name, last_name, password) {

    const bodyRequests = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
    };

    const url = API_URL + "/register";

    return axios
        .post(
            url,
            JSON.stringify(bodyRequests),
            configPostEndPoint
        )
        .then(result => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "message": result.data.error == undefined ? result.data.message : result.data.error
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
 * @param {*} email
 * @param {*} password
 */

 export function login(email, password) {

    const bodyRequests = {
        email: email,
        password: password,
    };

    const url = API_URL + "/login";

    return axios
        .post(
            url,
            JSON.stringify(bodyRequests),
            configPostEndPoint
        )
        .then(result => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "message": result.data.error == undefined ? result.data.msg : result.data.error,
                "user": result.data.error == undefined ? result.data.user : null,
                "token": result.data.error == undefined ? result.data.token : null
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
 */

 export function getProfile(token){

    const url = API_URL + "/user/profile";

    return axios
        .get(url,{
            headers: {
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': "*",
                Authorization: "Bearer "+ token,
            },
            mode: "no-cors"
        })
        .then((result) => {
            let response = {
                "status": result.data.error == undefined ? 200 : 400,
                "profile": result.data.error == undefined ? result.data.userData : null,
                "message": result.data.error == undefined ? result.data.message : result.data.error,
            }
            return response;
        })
        .catch(err => {
            console.log('ERROR: ', err);
        })

}