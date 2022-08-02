import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN } from "../../../constants/constants";

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    let headers = {
        "Content-Type": "application/json",
    };

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers = {
            ...{
                Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
            },
        };
    }

    return axios.get(API_BASE_URL + "/user/me", { headers: headers });
}
