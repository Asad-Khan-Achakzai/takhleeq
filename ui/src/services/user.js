// Third party imports
import axios from "axios";
import to from "await-to-js";

// Constant imports
import { constants } from "../constants/constants";

/**
 * Function to login user
 * @param {Object} reqBody
 */
export const loginUser = async (reqBody) => {
  const [err, result] = await to(
    axios.post(constants.baseURL + "/user/login", reqBody)
  );
  if (err) {
    return err;
  } else {
    return result?.data;
  }
};
