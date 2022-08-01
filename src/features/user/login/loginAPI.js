import axios from "axios";
import { API_BASE_URL } from "../../../constants/constants";

export function loginRequest(loginRequest) {
  return axios.post(
      API_BASE_URL + "/auth/login",
      JSON.stringify(loginRequest),
      { headers: {'content-type': 'application/json'} },
  );
}
