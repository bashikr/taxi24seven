import axios from "axios";
import { API_BASE_URL } from "../../../constants/constants";

export function signupRequest(signupRequest) {
  return axios.post(
      API_BASE_URL + "/auth/signup",
      JSON.stringify(signupRequest),
      { headers: {'content-type': 'application/json'} },
  );
}