import axios from "axios";
import {BASE_API_URL} from "../helpers/env";

export const shukranGwprocess = (dataObj, order_id) => {
    return new Promise((resolve, error) => {
        let direct_api_url = BASE_API_URL + "/payment/get-ssl-session/" + order_id;
        const config = {
            method: 'get',
            url: direct_api_url,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios(config).then(function (response) {
            console.log("response");
            console.log(response);
            resolve(JSON.stringify(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    })
}
