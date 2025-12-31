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
export const getAllPageBooksAPI = async (reqHeader, searchKey) => {
    return await commonAPI("GET", `${serverURL}/all-books/?search=${searchKey}`, {}, reqHeader);
}

// /user-books : get books added by user  - called by
export const getAllUserProfileBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/user-books`, {}, reqHeader);
}

// /user-books/bought : get books bought by user  - called by Purchase component
export const getAllUserBoughtBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/user-books/bought`, {}, reqHeader);
}

// /user/:id/edit : Edit - called by Edit Component using put request
export const updatetUserProfileAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverURL}/user/${id}/edit`, reqBody, reqHeader);
}

// edit user API
export const editUserAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverURL}/user/${id}/edit`, reqBody, reqHeader);
}

// get a single book details
export const getSingleBookDetailsAPI = async (id, reqHeader) => {
    return await commonAPI("GET", `${serverURL}/books/${id}/view`, {}, reqHeader);
}

// get all books by admin
export const getAllAdminBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/books/all`, {}, reqHeader);
}

// get all users by admin
export const getAllUsersAPI = async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/users/all`, {}, reqHeader);
}

// edit admin user API
export const editAdminUserAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${serverURL}/admin/${id}/edit`, reqBody, reqHeader);
}

// edit admin user update book status API
export const updateBookStatusAPI = async (id, reqHeader) => {
    return await commonAPI("PUT", `${serverURL}/books/${id}/update`, {}, reqHeader);
}
