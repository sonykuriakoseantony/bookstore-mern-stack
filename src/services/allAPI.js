//register - Auth component
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//Register API - called by Auth component when Register button is clciked
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/register`, reqBody);
}

//Login API - called by Auth component when Login button is clciked
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/login`, reqBody);
}

//Google Login API - called by Auth component when Google Login is successful
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/google-login`, reqBody);
}
