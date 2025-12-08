import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {

    const reqConfigure = {
        url,
        method : httpMethod,
        data : reqBody,
        headers : reqHeader ? reqHeader : {'Content-Type' : 'application/json'}
    }
    return await axios(reqConfigure).then((res)=>res).catch((err)=>err); //there should be no body for arrow function for it it tobe returnrd. Else we ewill have to explicitly give return statement.
}

export default commonAPI;