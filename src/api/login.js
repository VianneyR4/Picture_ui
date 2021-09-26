'use strict';
import axios from "axios";
// import qs from "qs";
// import store from "../store"

const API_URL = "http://127.0.0.1:3000/api/v1";
// const SOURCE_URL = "file:///D:/Sonia/";


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

// const getProfile = (token) => {

//     const url = API_URL + "/admin/profile";

//     return fetch(url, {
//             headers: {
//                 'Content-type': "application/json",
//                 'Access-Control-Allow-Origin': "*",
//                 authorization: token,
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             let response = {
//                 "status": data.error == undefined ? 201 : 400,
//                 "profile": data,
//                 "message": data.error != undefined ? data.error : data.msg,
//             }

//             return response;
//         })
//         .catch(err => {
//             console.log('ERROR: ', err);
//         })

// };