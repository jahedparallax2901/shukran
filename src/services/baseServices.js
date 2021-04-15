import axios from "axios"
import { BASE_API_URL } from "../helpers/env"
import { getDeviceType, getLocalAuthData } from "../helpers/utils";

/*
params:
  method(string) //all type of http method ( Ex: post, get)
  url(string) //api url excluding API_BASE_URL
  params(object) //all parameters and query parameters
  data(object) //data that want to send in a post method
  token(string) //authorization token of logged in user
return: 
  this function return a promise
functionality:
  this function can be used for all types of http requests
*/

// export const processHttpRequest = (method, url, params, data = {}, token="", id) => {
//     return new Promise((resolve, reject) => {
//       axios[method](BASE_API_URL + `/` + url + (method==="delete" || method==="put" || method==="patch") && `/${id}`, data, {
//         params: params? params : {},
//         headers: token? {
//           Authorization: token
//         }: {}
//       }).then(res => {
//         if (res.data.error) {
//           reject(res.data.error)
//         } else {
//           resolve(res.data)
//         }
//       }).catch(err => {
//         reject(err.message)
//       })
//     })
//   }

export const processGetRequest = (url, paramsObj = {}, isAuthenticationRequired = false) => {
  const authData = getLocalAuthData();
  console.log("BASE_API_URL",BASE_API_URL);
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_API_URL}${url}`, {
        params: paramsObj,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": isAuthenticationRequired? authData?.token : "",
          "x-api-client": getDeviceType(),
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err.message);
      });
  });
};

export const processPostRequest = (url, data = {}, isAuthenticationRequired = false) => {
  const authData = getLocalAuthData();
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_API_URL}${url}`, data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": isAuthenticationRequired? authData?.token : "",
          "x-api-client": getDeviceType(),
        },
      }).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        console.error(err);
        reject(err.message);
      });
  });
};