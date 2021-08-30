
import axios from 'axios';
// const SERVER_URL = "http://localhost:3001";
const SERVER_URL = "http://localhost:3000";
const login = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}/login`;

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data);

        // if(response.status === 200 && response.data.jwt && response.data.expireAt)
        if(response.status === 200 && response.data.accessToken )
        {
            let accessToken = response.data.accessToken;
         //   let expire_at = response.data.expireAt;
console.log("Hi " +accessToken)
            localStorage.setItem("access_token", JSON.stringify(response.data));
        //    localStorage.setItem("expire_at", expire_at);

        }
        else{
            console.log("Bye " )
        }


    } catch(e){
        console.log("error occured...");
        console.log(e);
    }
}

const register = async (data) => {
    const SIGNUP_ENDPOINT = `${SERVER_URL}/register`;
    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
          });
    } catch(e){
        console.log(e);
    }
}

const logout = () => {
    localStorage.removeItem("access_token");
  //  localStorage.removeItem("expire_at");
}

 function authHeader() {
    // return authorization header with jwt token
    let access1 = JSON.parse(localStorage.getItem('access_token'));
    console.log("hi "+ access1)
console.log(access1)
    if (access1 && access1.accessToken) {
        return { 'Authorization': 'Bearer ' + access1.accessToken };
      // return { Authorization: `Bearer ${access1.accessToken}`,'Access-Control-Allow-Origin':'*' };
    } else {
        return {};
    }
}
export { login, register, logout,authHeader } 