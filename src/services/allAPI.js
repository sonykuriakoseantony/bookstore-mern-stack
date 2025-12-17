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

//add book API - called by SellBook component when "Save Details" button is called
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${serverURL}/user/add/book`, reqBody, reqHeader);
}

//get books in home page - /home/books - called by home component on page load
export const getHomePageBooksAPI = async () => {
    return await commonAPI("GET", `${serverURL}/home/books`, {});
}

///all-books : get books request by books component on page load
export const getAllPageBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/all-books`, {}, reqHeader);
}

// /user-books : get books added by user  - called by
export const getAllUserProfileBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/user-books`, {}, reqHeader);
}

// /user-books/bought : get books bought by user  - called by
export const getAllUserBoughtBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/user-books/bought`, {}, reqHeader);
}


